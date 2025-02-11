"use client";

import { Avatar, Button } from "@heroui/react";
import ShowCaseSection from "@/app/ui/home/show-case-section";

export function StudentProfile({ username }: { username?: string }) {
  return (
    <div className="max-w-sm mx-auto">
      <div className="relative">
        <div className="bg-slate-600 h-40 rounded-xl mt-3"></div>
        <div className="">
          <div className=" w-5 h-5 bg-black rounded-full absolute -bottom-[1.1rem] left-[7.1rem] z-30"></div>
          <div className="absolute bottom-0 -mb-10 ml-5 bg-slate-600 p-2 rounded-full ">
            <Avatar
              isBordered
              className="w-20 h-20 text-large"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/man-3d-icon-download-in-png-blend-fbx-gltf-file-formats--pria-mohawk-jaket-boy-avatar-stylized-pack-people-icons-5823045.png?f=webp"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex justify-end gap-5 -mt-5 mr-5 z-10">
          <div className="rounded-full bg-black p-1 z-20">
            <Button isIconOnly radius="full" className="border-1">
              X
            </Button>
          </div>
          <div className="rounded-full bg-black p-1 z-20">
            <Button isIconOnly radius="full" className="border-1">
              X
            </Button>
          </div>
        </div>
        <div className="p-10">
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="text-2xl font-bold text-white">San Lin Htike</h1>
              <h6>@{username}</h6>
            </div>

            <div className="">
              <Button>10K</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <SkillLevel />
        <SkillLevel />
        <SkillLevel />
        <SkillLevel />
      </div>

      <ShowCaseSection isMobile={true} />
    </div>
  );
}

function SkillLevel() {
  return (
    <div className="p-3 rounded-3xl border border-slate-600 flex gap-2">
      <Avatar
        size="lg"
        src="https://cdn3d.iconscout.com/3d/premium/thumb/man-3d-icon-download-in-png-blend-fbx-gltf-file-formats--pria-mohawk-jaket-boy-avatar-stylized-pack-people-icons-5823045.png?f=webp"
      />

      <div className="">
        <h6>Level</h6>
        <h1>Pro</h1>
      </div>
    </div>
  );
}
