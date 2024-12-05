import HeroSection from "./ui/home/hero-section";
import { NavbarDemo } from "./ui/home/navbar-demo";
import BuiltDevSection from "./ui/home/built-for-developers";
import LearnUseSection from "./ui/home/learn-use-section";
import FooterSection from "./ui/home/footer-section";
import TestimonialSection from "./ui/home/testimonial-section";
import ShowCaseSection from "./ui/home/show-case-section";
import YoutubeUI from "./ui/home/youtube-ui";

export default function Home() {
  return (
    <div className="">
      <NavbarDemo />
      <HeroSection />
      <YoutubeUI />
      <BuiltDevSection />
      <LearnUseSection />
      <TestimonialSection />
      <ShowCaseSection />
      <FooterSection />
    </div>
  );
}
