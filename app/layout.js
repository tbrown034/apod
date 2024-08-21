import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NASA or Not?",
  description:
    "Can you spot the difference between real NASA and AI-generated images?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex p-2 flex-col min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white`}
      >
        {/* Header is fixed at the top */}
        <Header />
        {/* Main content will expand to fill remaining space */}
        <main className="flex-grow p-4">{children}</main>
        {/* Footer is fixed at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
