
import { Features } from "@/components/sections/features/Features";
import Contact from "../sections/Contact";
import About from "../sections/About";
import Hero from "../sections/Hero";
import { CryptoSlider } from "../sections/CryptoSlider";
import Info from "../sections/Info";



export const HomePage = () => (
  <>
    <Hero/>
    <CryptoSlider/>
    <Features />
    <About/>
    <Info/>
    <Contact/>
  </>
);