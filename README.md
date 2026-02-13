# 🔍 Gender Finder

A modern, brutalist-style web application that predicts gender based on names using the Genderize.io API. Built with Next.js 16 and React 19, featuring a bold and distinctive design aesthetic.

## ✨ Features

- **Real-time Gender Prediction**: Instantly predict gender based on first names
- **Confidence Scoring**: Display probability percentages with confidence level descriptions
- **Input Validation**: Client-side validation using Zod to ensure proper name format
- **Brutalist Design**: Bold, high-contrast UI with distinctive shadows and typography
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Server Components**: Leverages Next.js App Router with React Server Components for optimal performance
- **Error Handling**: Graceful error handling with user-friendly messages

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Linting**: [ESLint](https://eslint.org/) with Next.js config

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gender-finder
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Build for Production

```bash
npm run build
npm start
```

## 📖 Usage

1. **Enter a Name**: Type a first name in the input field (letters only, minimum 2 characters)
2. **Submit**: Click "Reveal Truth" or press Enter
3. **View Results**: See the predicted gender with confidence percentage
4. **Try Again**: Click "try another name" to check another name

### Example Results

The app displays:
- **Gender**: MALE, FEMALE, or UNKNOWN
- **Confidence %**: Probability score (0-100%)
- **Confidence Level**: 
  - "absolutely certain" (>90%)
  - "pretty darn sure" (>75%)
  - "somewhat confident" (>50%)
  - "making a guess" (<50%)
- **Data Points**: Number of records used for prediction

## 📁 Project Structure

```
gender-finder/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx            # Root layout component
│   ├── page.tsx              # Home page with input form
│   └── data-fetch/
│       └── page.tsx          # Results page with gender prediction
├── public/                   # Static assets
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🔌 API Reference

This app uses the [Genderize.io API](https://genderize.io/) to predict gender based on names.

**Endpoint**: `https://api.genderize.io/?name={name}`

**Response Structure**:
```json
{
  "name": "john",
  "gender": "male",
  "probability": 0.99,
  "count": 12345
}
```

**Note**: The free tier allows 1000 requests per day. Consider upgrading for higher limits.

## 🎨 Design Philosophy

The app features a bold brutalist design with:
- High contrast black borders
- Custom box shadows for depth
- Large, bold typography (Oswald font family)
- Bright accent colors
- Minimal, functional layout
- Responsive animations and transitions

## 🧪 Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **TypeScript**: Strict type checking enabled
- **Validation**: Input validation with Zod schemas
- **Best Practices**: React 19 best practices with Server Components

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is private and not licensed for public use.

## 👨‍💻 Developer

**Developed and Managed By Kunal**

---

Built with ❤️ using Next.js and TypeScript
