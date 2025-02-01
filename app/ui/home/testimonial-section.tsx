import { Button, Chip, Link, User } from "@nextui-org/react";
import { h1 } from "framer-motion/client";
import Reveal from "../framer-motion/reveal";

export default function TestimonialSection() {
  return (
    <div className="mt-20 px-5 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl lg:text-4xl text-center text-white">
          <Reveal>Serving world-class developers, world-wide</Reveal>
        </h1>

        <div className="grid lg:grid-cols-2 gap-10 w-full mt-10">
          <BuildDevCard
            title="npx polar-init"
            description="Bootstrap products, subscriptions, checkouts & webhooks in your Next.js or Nuxt.js project."
          />
          <BuildDevCard
            title="Sandbox"
            description="An isolated sandbox environment, so you can test your integration without risk."
          />
          <BuildDevCard
            title="Webhooks"
            description="Receive reliable webhooks for events, including payments, subscriptions, and more."
          />
        </div>
      </div>
    </div>
  );
}

const BuildDevCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#0e0e10] p-8 rounded-2xl">
      <User
        name={
          <h1 className="text-white">
            <Reveal>Junior Garcia</Reveal>
          </h1>
        }
        description={
          <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
            <Reveal>@jrgarciadev</Reveal>
          </Link>
        }
        avatarProps={{
          src: "https://avatars.githubusercontent.com/u/30373425?v=4",
        }}
      />

      <div className="ml-12 mt-3">
        <p className="text-white">
          <Reveal>{description}</Reveal>
        </p>
      </div>
    </div>
  );
};
