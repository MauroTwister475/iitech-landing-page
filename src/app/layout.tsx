import Poppins from "next/font/local";
import "@/styles/globals.css";

const poppins = Poppins({
  src: "../assets/fonts/poppins.ttf",
  weight: "medium",
  fallback: ['Carregando Font']
});

interface LayoutProps {
  children: React.ReactNode,
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en" className="w-screen h-screen antialiased scroll-smooth">
      <body className={`${poppins.className} w-screen h-screen antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
