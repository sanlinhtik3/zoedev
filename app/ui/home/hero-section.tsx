import { Button, Image } from "@heroui/react";
import Link from "next/link";
import Reveal from "../framer-motion/reveal";

export default function HeroSection() {
  return (
    <div className="text-center py-40">
      <h1 className="text-5xl md:text-7xl lg:text-9xl max-w-2xl mx-auto text-white">
        <Reveal>
          If you learn <br /> you will{" "}
          <span className="text-gray-400">earn</span>
        </Reveal>
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        <Button
          startContent={
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png"
              width={20}
              height={20}
              alt="YouTube"
            />
          }
          size="lg"
          className="mt-10"
          color="primary"
          as={Link}
          href="https://youtube.com/@sanlinhtike?si=05CfDxisPEN_iDP4"
          target="_blank"
        >
          Learn YouTube
        </Button>

        <Button
          size="lg"
          className="mt-10"
          color="primary"
          variant="bordered"
          as={Link}
          href="/student/sanlinhtike"
          target="_blank"
        >
          My Profile
        </Button>
      </div>
    </div>
  );
}
