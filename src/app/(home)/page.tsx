import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import WhyUs from "@/components/home/WhyUs";
import Reviews from "@/components/home/Reviews";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Reviews />
      <CTA />
    </>
  );
}
