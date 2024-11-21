import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="text-center py-40">
      <h1 className="text-5xl md:text-7xl lg:text-9xl max-w-2xl mx-auto text-white">
        If you learn <br /> you will <span className="text-gray-400">earn</span>
      </h1>

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
    </div>
  );
}
