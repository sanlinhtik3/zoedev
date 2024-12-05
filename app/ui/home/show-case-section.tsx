import { Image } from "@nextui-org/react";

const showcases = [
  {
    id: "fjwefel",
    title: "Realtime Collaboration",
    image:
      "https://spline.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature_01.2c08745d.jpg&w=3840&q=100",
    description:
      "Work with your team in real-time and set individual permissions.",
  },
  {
    id: "cdjfdk",
    title: "3D Modeling",
    description: "Parametric objects, polygonal editing, and more.",
    image:
      "https://spline.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature_02.cc4a57dc.jpg&w=3840&q=100",
  },
  {
    id: "jfeijfej",
    title: "Animation",
    description: "Give life to your 3d objects.",
    image:
      "https://spline.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature_03.651311c1.jpg&w=3840&q=100",
  },
  {
    id: "ckdjfkej",
    title: "Game Controls",
    description: "Easily create 3rd person and 1st person experiences.",
    image:
      "https://spline.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature_08.b1c27e87.jpg&w=3840&q=100",
  },
];

export default function ShowCaseSection() {
  return (
    <div className="mt-32 px-5 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl lg:text-3xl text-center text-white font-bold">
          Tools to express your creativity in 3D
        </h1>

        <h4 className="text-xl lg:text-2xl  text-center text-gray-400 max-w-3xl mx-auto mt-5">
          3D opens a new door for creativity. A solid set of features that will
          help you create your best 3d designs.
        </h4>

        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          {showcases.map((showcase) => (
            <ShowCaseCard key={showcase.id} {...showcase} />
          ))}
        </div>
      </div>
    </div>
  );
}

type ShowcaseType = {
  title: string;
  image: string;
  description: string;
};

function ShowCaseCard({ title, image, description }: ShowcaseType) {
  return (
    <>
      <div className="bg-[#181a1d] rounded-2xl p-10">
        <Image src={image} width={3840} alt="YouTube" />
        <h1 className="text-lg font-bold mt-5 text-center text-white">
          {title}
        </h1>
        <p className="mt-3 text-center">{description}</p>
      </div>
    </>
  );
}
