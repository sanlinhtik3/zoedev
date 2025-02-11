import { Avatar, Button, Image } from "@heroui/react";
import Link from "next/link";
import Reveal from "../framer-motion/reveal";

export default function YoutubeUI() {
  return (
    <>
      <div className=" px-5 lg:px-0">
        <div className="p-5 max-w-6xl mx-auto rounded-3xl bg-[#181a1d]">
          <Reveal>
            <Image
              className="w-full"
              src="https://yt3.googleusercontent.com/el74iq5_WjWCxwyS0WB-7tFyxsagiogyHzkVgkPJckc3-Vw0M3q1jK6ajDvNRC-AHiXHHulU=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
              // height={200}
              alt="YouTube"
            />
          </Reveal>

          <div className="flex items-center gap-2 mt-5">
            <Reveal>
              <Avatar
                src="https://yt3.googleusercontent.com/O-4SwyAGvdxP5H77od9kw8flp25ZGhA0zvsp_cvtCGpyAWvK1my-QD7uzClPSnu522rfC4oUYBA=s160-c-k-c0x00ffffff-no-rj"
                isBordered
                radius="full"
                className="w-20 h-20 lg:w-40 lg:h-40 text-large"
              />
            </Reveal>

            <div className="">
              <h1 className="text-xl lg:text-3xl font-bold text-white">
                <Reveal>San Lin Htike</Reveal>
              </h1>
              <h1 className="text-gray-400 lg:mt-3 text-sm lg:text-medium">
                <Reveal>@sanlinhtike - 76.9K subscribers - 856 Videos</Reveal>
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
