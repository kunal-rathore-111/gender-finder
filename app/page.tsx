"use client"

import { useRouter } from "next/navigation";
import { SyntheticEvent, useRef, useState } from "react";

export default function HomePage() {

  const [isLoading, setLoading] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null)
  const router = useRouter();

  function eventHandlerFunc(e: SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    const name = nameRef.current?.value;
    if (name) {
      router.push(`/data-fetch?name=${name}`)
    } else {
      setLoading(false); // Stop loading if no name
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[var(--background)]">

      {/* Decorative Doodles Removed */}


      {isLoading ?
        <div className="text-4xl font-black font-oswald animate-pulse">CALCULATING DESTINY...</div>
        :
        <main className="z-10 flex flex-col items-center gap-8 w-full max-w-2xl px-4">

          <h1 className="text-7xl md:text-9xl font-black font-oswald text-center uppercase leading-none tracking-tighter">
            Check Your <br />
            <span className="text-[var(--accent)] underline decoration-4 decoration-black underline-offset-8">Gender</span>
          </h1>

          <form onSubmit={eventHandlerFunc} className="flex flex-col items-center gap-6 w-full">
            <div className="relative w-full max-w-md">
              <input
                placeholder="ENTER NAME..."
                ref={nameRef}
                className="w-full text-3xl font-bold bg-white text-black p-6 border-4 border-black brutalist-shadow focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all placeholder:text-gray-400 uppercase font-oswald text-center"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[var(--accent)] text-white text-3xl font-black px-12 py-4 border-4 border-black brutalist-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase font-oswald cursor-pointer active:scale-95"
            >
              Reveal Truth &rarr;
            </button>
          </form>

        </main>
      }

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-bold text-sm opacity-50 uppercase tracking-widest">
        Developed and Managed By"  Kunal
      </div>
    </div>
  )
}