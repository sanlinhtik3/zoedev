"use client";

import { Avatar, Input } from "@heroui/react";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div className="p-5">
          <div className="border p-5">
            <div className="">
              <Input
                label="Email"
                type="email"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="border p-5">
            <div className="text-center">
              <Avatar
                className="mx-auto"
                isBordered
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />

              <h1 className="text-3xl">{name}</h1>

              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">
                  {JSON.stringify(name, null, 2)}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
