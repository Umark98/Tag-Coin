import Footer from "../Footer";
import { Navbar } from "./Navbar";


interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <main className="min-h-screen bg-white text-black">
    <Navbar />
    {children}
    <Footer/>

  </main>
);