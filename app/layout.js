import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: "NextAdmin",
  description: "A complete admin dashboard built with NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
