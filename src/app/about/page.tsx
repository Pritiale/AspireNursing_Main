import About from "@/components/home/About";
import WhyUs from "@/components/home/WhyUs";
import PageBanner from "@/components/PageBanner";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Aspire Nursing"
        title="Aged care is all we do"
        description="We are a dedicated aged care specialist agency — supplying qualified nurses and carers to residential facilities and home care providers."
      />
      <About />
      <WhyUs />
    </>
  );
}
