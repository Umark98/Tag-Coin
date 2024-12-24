
import { Features } from "@/components/sections/features/Features";
import Contact from "../sections/Contact";
import About from "../sections/About";
import Hero from "../sections/Hero";
import { CryptoSlider } from "../sections/CryptoSlider";
import Info from "../sections/Info";
import Industry from "../sections/Industry";




export const HomePage = () => (
  <>
    <Hero/>
    <CryptoSlider/>
    <Features />
    <About/>
    <Info/>
    <Industry/>
    <Contact/>
  </>
);