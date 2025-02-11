import { Button, Chip } from "@heroui/react";
import CoinListBox from "./coin-list-box";
import Link from "next/link";

export default function TonSellers() {
  return (
    <div className="px-5 lg:px-0 mt-32">
      <div className="max-w-6xl mx-auto flex justify-center items-center bg-[#09090b] p-10 lg:p-16 rounded-3xl">
        <div className=" space-y-10">
          <h1 className="text-center">TON Sellers</h1>
          <h1 className="text-4xl text-white text-center max-w-2xl mx-auto font-bold">
            TRUST will make to success
          </h1>

          <div className="text-center">
            <Chip>TON & Star</Chip>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <BuildDevCard
              title="Aung Kyaw"
              description="Replay အနည်းငယ် ကြာနိုင်ပါတယ်။ စာပို့ထားပေးပါ။"
              tg="https://t.me/zoecryptofree"
            />
            <BuildDevCard
              title="Anonymous"
              description="Replay အနည်းငယ် ကြာနိုင်ပါတယ်။ စာပို့ထားပေးပါ။"
              tg="https://t.me/zoecryptofree"
            />
            <BuildDevCard
              title="Anonymous"
              description="Replay အနည်းငယ် ကြာနိုင်ပါတယ်။ စာပို့ထားပေးပါ။"
              tg="https://t.me/zoecryptofree"
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
  tg,
}: {
  title: string;
  description: string;
  tg?: string;
}) => {
  return (
    <div className="bg-[#0e0e10] p-8 rounded-2xl flex flex-col">
      <div className="flex-1">
        <h1 className="text-white text-xl font-bold">{title}</h1>
        <p className="mt-3">{description}</p>
      </div>

      <div className="">
        <CoinListBox />
      </div>

      <div className="mt-5">
        <Button fullWidth color="primary" as={Link} href={tg}>
          ဝယ်မည်
        </Button>
      </div>
    </div>
  );
};
