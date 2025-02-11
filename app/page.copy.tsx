import { Avatar } from "@heroui/react";
import { TabsUI } from "./ui/component/tabs";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div className="h-48 bg-gray-800 rounded-2xl"></div>

      <div className="mt-5">
        <div className="flex items-center gap-2">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-20 h-20 text-large"
          />
          <div className="">
            <h1 className="text-3xl font-bold">San Lin Htike</h1>
            <h1 className="">@sanlinhtike</h1>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <TabsUI />
      </div>
    </div>
  );
}
