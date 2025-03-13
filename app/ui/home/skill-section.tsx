import { Image } from "@heroui/react";

const skills = [
  {
    name: "YouTube",
    image: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    link: "URL_ADDRESS",
  },
  {
    name: "React",
    image: "https://img.icons8.com/?size=96&id=123603&format=png",
    link: "URL_ADDRESS",
  },
  {
    name: "YouTube",
    image: "https://img.icons8.com/?size=96&id=yUdJlcKanVbh&format=png",
    link: "URL_ADDRESS",
  },
  {
    name: "MongoDB",
    image: "https://img.icons8.com/?size=96&id=bosfpvRzNOG8&format=png",
    link: "URL_ADDRESS",
  },
  {
    name: "Tailwind CSS",
    image: "https://img.icons8.com/?size=96&id=CIAZz2CYc6Kc&format=png",
    link: "URL_ADDRESS",
  },
  {
    name: "Prisma",
    image: "https://img.icons8.com/?size=100&id=aqb9SdV9P8oC&format=png",
    link: "URL_ADDRESS",
  },
];

export default function SkillSection() {
  return (
    <>
      <div className="mt-32 max-w-6xl mx-auto grid grid-cols-2 gap-10 lg:grid-cols-5">
        {skills.map((skill) => (
          <div className="text-center flex justify-center">
            <Image
              src={skill.image}
              alt={skill.name}
              className="mx-auto w-20"
            />
          </div>
        ))}
      </div>
    </>
  );
}
