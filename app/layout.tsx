import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Pamtech Luxury Ride",
  description: "Experience Luxury on every Ride",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
