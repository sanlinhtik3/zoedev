import { Button, Chip } from "@nextui-org/react";

export default function LearnUseSection() {
  return (
    <div className="mt-20">
      <div className="max-w-6xl mx-auto flex justify-center items-center bg-[#09090b] p-16 rounded-3xl">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="max-w-2xl space-y-5">
            <h1 className="text-5xl text-white max-w-2xl mx-auto leading-tight">
              Automated benefits like never before
            </h1>

            <p>Sell access to your premium apps, services or APIs with ease.</p>

            <Button color="primary" radius="full">
              Get Started
            </Button>

            <Button color="primary" radius="full" variant="light">
              Sell all benefits
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 w-full">
            <div className="grid gap-5">
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

            <div className="grid gap-5">
              <BuildDevCardPrice
                title="Just an Example"
                description="Polar has no monthly fees. This tier is only an example of what you could offer your audience in minutes using Polar."
              />
            </div>
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
      <h1 className="text-white text-xl">{title}</h1>
      <p className="mt-3">{description}</p>
    </div>
  );
};

const BuildDevCardPrice = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#0e0e10] p-3 rounded-3xl flex flex-col">
      <div className="flex-1 p-5">
        <h1 className="text-white text-xl ">{title}</h1>
        <p className="mt-3">{description}</p>
      </div>

      <div className="bg-[#151619] p-8 rounded-2xl">
        <h1 className="text-white text-xl">Included</h1>
        <div className="space-y-3 mt-3">
          <h1 className="text-white text-xl">Private GitHub repository</h1>
          <h1 className="text-white text-xl">Private GitHub repository</h1>
          <h1 className="text-white text-xl">Private GitHub repository</h1>
          <h1 className="text-white text-xl">Private GitHub repository</h1>
        </div>
      </div>
    </div>
  );
};
