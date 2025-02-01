import Reveal from "../framer-motion/reveal";

const communities = [
  {
    name: "Discord",
    url: "https://discord.com",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
  },
  {
    name: "GitHub",
    url: "https://github.com",
  },
];

const supports = [
  {
    name: "Docs",
    url: "https://discord.com",
  },
  {
    name: "FAQ",
    url: "https://twitter.com",
  },
  {
    name: "Contact",
    url: "https://github.com",
  },
];

export default function FooterSection() {
  return (
    <div className="mt-20 px-5 lg:px-0">
      <div className="max-w-6xl mx-auto items-center bg-[#09090b] p-16 rounded-3xl">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          <div className="max-w-60 space-y-5">
            <h1 className="text-4xl text-white">
              <Reveal>ZOEDEV</Reveal>
            </h1>

            <p>
              <Reveal>© Polar Software Inc. 2024</Reveal>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:gap-20">
            <BuildDevCard title="Community" communities={communities} />
            <BuildDevCard title="Support" communities={supports} />
          </div>
        </div>
      </div>
    </div>
  );
}

const BuildDevCard = ({
  title,
  communities,
}: {
  title: string;
  communities: {
    name: string;
    url: string;
  }[];
}) => {
  return (
    <div className="rounded-2xl">
      <h1 className="text-white text-xl">
        <Reveal>{title}</Reveal>
      </h1>
      <div className="mt-3">
        {communities.map((community) => (
          <div className="">
            <Reveal>{community.name}</Reveal>
          </div>
        ))}
      </div>
    </div>
  );
};
