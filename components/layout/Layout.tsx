import Footer from "../Footer";
import { Navbar } from "./Navbar";


interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <main className="min-h-screen bg-black text-white">
    <Navbar />
    {children}
    <Footer/>

  </main>
);