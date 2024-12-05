import { Avatar, Button, Image } from "@nextui-org/react";
import Link from "next/link";

export default function YoutubeUI() {
  return (
    <>
      <div className=" px-5 lg:px-0">
        <div className="p-5 max-w-6xl mx-auto rounded-3xl bg-[#181a1d]">
          <Image
            className="w-full"
            src="https://yt3.googleusercontent.com/el74iq5_WjWCxwyS0WB-7tFyxsagiogyHzkVgkPJckc3-Vw0M3q1jK6ajDvNRC-AHiXHHulU=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            // height={200}
            alt="YouTube"
          />

          <div className="flex items-center gap-2 mt-5">
            <Avatar
              src="https://yt3.googleusercontent.com/8fzXKXHyzB7dFKn5xY2J2_EO7gZaIgFvwk3Md2SZVTFi-AJhvYhWxoMpoh_Ii3vePmk7b7-dC4I=s160-c-k-c0x00ffffff-no-rj"
              isBordered
              radius="full"
              className="w-20 h-20 lg:w-40 lg:h-40 text-large"
            />
            <div className="">
              <h1 className="text-xl lg:text-3xl font-bold text-white">
                San Lin Htike
              </h1>
              <h1 className="text-gray-400 lg:mt-3 text-sm lg:text-medium">
                @sanlinhtike - 73.6K subscribers - 856 Videos
              </h1>
              <Button
                startContent={
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png"
                    width={20}
                    height={20}
                    alt="YouTube"
                  />
                }
                className="mt-2 lg:mt-3"
                color="primary"
                as={Link}
                href="https://youtube.com/@sanlinhtike?si=05CfDxisPEN_iDP4"
                target="_blank"
              >
                Learn YouTube
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
