import HeroSection from "./ui/home/hero-section";
import { NavbarDemo } from "./ui/home/navbar-demo";
import BuiltDevSection from "./ui/home/built-for-developers";
import LearnUseSection from "./ui/home/learn-use-section";
import FooterSection from "./ui/home/footer-section";
import TestimonialSection from "./ui/home/testimonial-section";
import ShowCaseSection from "./ui/home/show-case-section";

export default function Home() {
  return (
    <div className="mb-96">
      <NavbarDemo />
      <HeroSection />
      <BuiltDevSection />
      <LearnUseSection />
      <TestimonialSection />
      <ShowCaseSection />
      <FooterSection />
    </div>
  );
}
