import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kadhiravan A - Data Scientist & AI Engineer Portfolio",
  description: "Portfolio of Kadhiravan A - Data Scientist, AI Engineer, and ML enthusiast. Explore projects, skills, and experience.",
  keywords: [
    "Kadhiravan A",
    "Data Scientist",
    "AI Engineer",
    "GenAI Developer",
    "ML Engineer",
    "Portfolio",
    "Chennai"
  ],
  authors: [{ name: "Kadhiravan A" }],
  creator: "Kadhiravan A",
  openGraph: {
    title: "Kadhiravan A - Data Scientist & AI Engineer Portfolio",
    description: "Portfolio of Kadhiravan A - Data Scientist, AI Engineer, and ML enthusiast. Explore projects, skills, and experience.",
    url: "https://kadhiravan.dev", // Placeholder domain
    siteName: "Kadhiravan A Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadhiravan A - Data Scientist & AI Engineer Portfolio",
    description: "Portfolio of Kadhiravan A - Data Scientist, AI Engineer, and ML enthusiast. Explore projects, skills, and experience.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-[var(--foreground)] bg-[var(--background)] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
