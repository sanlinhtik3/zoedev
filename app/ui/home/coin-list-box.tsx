"use client";

import type { Selection } from "@react-types/shared";

import React from "react";
import {
  Listbox,
  ListboxItem,
  Chip,
  ScrollShadow,
  Avatar,
} from "@heroui/react";

export const users = [
  {
    id: 1,
    name: "TON",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://cryptologos.cc/logos/toncoin-ton-logo.png",
    email: "example@example.com",
  },
  {
    id: 2,
    name: "Telegram Star",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar:
      "https://files.virgool.io/upload/users/3568842/posts/luzj38awmtad/icevnm0av61y.webp",
    email: "example@example.com",
  },
];

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full border-small px-1 py-2 rounded-xl border-default-200 dark:border-default-100 mt-5">
    {children}
  </div>
);

export default function CoinListBox() {
  const [values, setValues] = React.useState<Selection>(new Set(["1"]));

  const arrayValues = Array.from(values);

  const topContent = React.useMemo(() => {
    if (!arrayValues.length) {
      return null;
    }

    return (
      <ScrollShadow
        hideScrollBar
        className="w-full flex py-0.5 px-2 gap-1"
        orientation="horizontal"
      >
        {arrayValues.map((value) => (
          <Chip key={value}>
            {users.find((user) => `${user.id}` === `${value}`)?.name}
          </Chip>
        ))}
      </ScrollShadow>
    );
  }, [arrayValues.length]);

  return (
    <ListboxWrapper>
      <Listbox
        classNames={{
          base: "",
          list: "max-h-[300px] overflow-scroll",
        }}
        // defaultSelectedKeys={["1"]}
        items={users}
        label="Assigned to"
        selectionMode="multiple"
        // topContent={topContent}
        variant="flat"
        // onSelectionChange={setValues}
      >
        {(item) => (
          <ListboxItem key={item.id} textValue={item.name}>
            <div className="flex gap-2 items-center">
              <Avatar
                alt={item.name}
                className="flex-shrink-0"
                size="sm"
                src={item.avatar}
              />
              <div className="flex flex-col">
                <span className="text-small">{item.name}</span>
                {/* <span className="text-tiny text-default-400">{item.email}</span> */}
              </div>
            </div>
          </ListboxItem>
        )}
      </Listbox>
    </ListboxWrapper>
  );
}
