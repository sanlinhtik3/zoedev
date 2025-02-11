"use client";

import { Avatar, Button, Input, Select, SelectItem } from "@heroui/react";
import { useState } from "react";

const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
];

export default function Page() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState<string>("");

  const [data, setData] = useState<
    Array<{ name: string; price: string; type: string }>
  >([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setData((prev) => [...prev, { name, price, type, value }]);

    setName("");
    setPrice("");
    setType("");
  };

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div className="p-5">
          <div className="border p-5">
            <form action="" onSubmit={handleSubmit}>
              <Input
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <Select
                className="max-w-xs"
                label="Favorite Animal"
                placeholder="Select an animal"
                selectedKeys={[value]}
                variant="bordered"
                onChange={handleSelectionChange}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>

        <div className="p-5">
          <div className="border p-5">
            <div className="">
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">
                  {JSON.stringify(data, null, 2)}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
