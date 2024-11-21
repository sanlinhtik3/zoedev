import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="text-center py-40">
      <h1 className="text-6xl max-w-2xl mx-auto text-white">
        Sell SaaS and digital products{" "}
        <span className="text-gray-400">in minutes</span>
      </h1>

      <Button
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
