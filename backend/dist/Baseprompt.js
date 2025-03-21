"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basePrompt = void 0;
exports.basePrompt = `<DevfolioArtifact id="project-import" title="Project Files"><DevfolioAction type="file" filePath="next.config.mjs">/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
</DevfolioAction><DevfolioAction type="file" filePath="package.json">{
  "name": "nextjs-typescript-starter",
  "private": true,
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "next": "^14.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/node": "^20.11.5",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-config-next": "^14.1.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3"
  }
}</DevfolioAction><DevfolioAction type="file" filePath="postcss.config.js">module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};</DevfolioAction><DevfolioAction type="file" filePath="tailwind.config.js">/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};</DevfolioAction><DevfolioAction type="file" filePath="tsconfig.json">{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}</DevfolioAction><DevfolioAction type="file" filePath=".eslintrc.json">{
  "extends": "next/core-web-vitals"
}</DevfolioAction><DevfolioAction type="file" filePath="app/layout.tsx">import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js + TypeScript Starter',
  description: 'A starter template for Next.js with TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}</DevfolioAction><DevfolioAction type="file" filePath="app/globals.css">@tailwind base;
@tailwind components;
@tailwind utilities;</DevfolioAction><DevfolioAction type="file" filePath="app/page.tsx">export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <p>Start prompting (or editing) to see magic happen :)</p>
    </div>
  );
}</DevfolioAction><DevfolioAction type="file" filePath="next-env.d.ts">/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information. </DevfolioAction></DevfolioArtifact>`;
