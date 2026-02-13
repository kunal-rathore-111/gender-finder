import axios from "axios"
import Link from "next/link";
import z from "zod";

interface DataFetchServerCompInput {
    searchParams: Promise<{ name: string }>
}

export default async function DataFetchServerComp(props: DataFetchServerCompInput) {

    const value = (await props.searchParams);
    const name = value?.name;

    function renderErrorHTML(data: string) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="bg-white border-4 border-black brutalist-shadow p-3 sm:p-8 max-w-md text-center transform -rotate-2">
                    <h2 className="text-xl sm:text-4xl font-black font-system text-black uppercase mb-2 sm:mb-4">ERROR 404:<br />IDENTITY NOT FOUND</h2>
                    <p className="text-xs sm:text-xl font-bold font-mono mb-4 sm:mb-8 border-b-2 border-black pb-2">{data}</p>
                    <EnterNameLinkComp label="TRY AGAIN" />
                </div>
            </div>
        )
    }

    if (!name) return renderErrorHTML('No name provided.');

    const zO = z.object({
        name: z.string().min(2).regex(/^[a-zA-Z]+$/, "Name should only contain characters A-Z or a-z")
    })

    const result = zO.safeParse({ name });

    if (result.success) {
        const url = 'https://api.genderize.io/?name='
        const respond = await axios(`${url + name}`, {
            method: "GET"
        });

        const data = respond.data;
        // console.log(data);

        const gender = data?.gender ? data.gender.toUpperCase() : "UNKNOWN";
        const probability = data?.probability ? Math.round(data.probability * 100) : 0;
        const displayName = data?.name ? data.name : "Anonymous";
        const count = data?.count ? data.count.toLocaleString() : "0";

        // Determine confidence level text
        let confidenceLevel = "unsure";
        if (probability > 90) confidenceLevel = "absolutely certain";
        else if (probability > 75) confidenceLevel = "pretty darn sure";
        else if (probability > 50) confidenceLevel = "somewhat confident";
        else confidenceLevel = "making a guess";

        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden text-center p-4">


                <main className="z-10 flex flex-col items-center w-full max-w-4xl cursor-default">

                    <div className="mb-2 sm:mb-4">
                        <h2 className="text-lg sm:text-3xl md:text-4xl font-bold font-system text-black tracking-wide">

                            {displayName} is...
                        </h2>
                    </div>

                    <div className="relative flex flex-col items-center justify-center w-full min-h-30 ">
                        <h1 className="text-7xl sm:text-[12rem] md:text-[20rem] leading-none font-black font-system text-black tracking-tighter z-10 text-center">
                            {gender}
                        </h1>

                        {gender !== "UNKNOWN" && (
                            <div className="absolute  sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:-right-6 md:-right-16 right-0 z-20 rotate-[-10deg]">
                                <div className="bg-accent border-4 border-black rounded-full w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center shadow-[4px_4px_0px_0px_#000] animate-float" style={{ animationDelay: '0.5s' }}>
                                    <span className="text-sm sm:text-3xl md:text-4xl font-black font-system text-black">{probability}%</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <p className="text-sm sm:text-xl md:text-2xl font-medium text-gray-600 mt-4 font-sans">
                        confidence level: {confidenceLevel}
                    </p>

                    <div className="mt-8 sm:mt-12">
                        <EnterNameLinkComp label="try another name" />
                    </div>

                    <p className="text-xs sm:text-sm md:text-base text-gray-400 font-sans mt-6 sm:mt-8 w-full flex justify-center">
                        based on {count} data points
                    </p>

                </main>
            </div>
        )
    } else {
        return renderErrorHTML(result.error.flatten().fieldErrors.name?.[0] ?? "Unknown error");
    }

}


function EnterNameLinkComp({ label }: { label: string }) {
    return (
        <Link
            href={'/'}
            className="inline-flex bg-white text-black text-sm sm:text-lg md:text-xl font-bold px-4 sm:px-8 py-2 sm:py-3 border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all lowercase font-sans items-center gap-2"
        >
            <span>&larr;</span> {label}
        </Link>
    )
}