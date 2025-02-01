import { Chip } from "@nextui-org/react";
import Reveal from "../framer-motion/reveal";

export default function BuiltDevSection() {
  return (
    <div className="px-5 lg:px-0 mt-32">
      <div className="max-w-6xl mx-auto flex justify-center items-center bg-[#09090b] p-10 lg:p-16 rounded-3xl">
        <div className=" space-y-10">
          <h1 className="text-center">Built for Developers</h1>
          <h1 className="text-4xl text-white text-center max-w-2xl mx-auto">
            <Reveal>
              The fastest way to add SaaS & digital products to your stack
            </Reveal>
          </h1>

          <div className="text-center">
            <Chip>
              <Reveal>Integriate with your stack</Reveal>
            </Chip>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
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
      <h1 className="text-white text-xl">
        <Reveal>{title}</Reveal>
      </h1>
      <p className="mt-3">
        <Reveal>{description}</Reveal>
      </p>
    </div>
  );
};
