import { Poppins, Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  style: ['normal', 'italic']
})

export const metadata = {
  title: "NextAdmin",
  description: "A complete admin dashboard built with NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-slate-50`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
