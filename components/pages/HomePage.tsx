import { Hero } from "@/components/sections/hero/Hero";
import { Features } from "@/components/sections/features/Features";
import Contact from "../sections/Contact";
import About from "../sections/About";


export const HomePage = () => (
  <>
    <Hero />
    <Features />
    <About/>
    <Contact/>
  </>
);