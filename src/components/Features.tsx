import Image from "next/image";
import CardImage from "../assets/card.jpg";

const RENDERDATA = [
  {
    imgSrc: CardImage,
    heading: "Interview preparation resources",
    content:
      "Get access to a variety of interview preparation resources, including guides, articles, and videos.",
  },
  {
    imgSrc: CardImage,
    heading: "Interview preparation resources",
    content:
      "Get access to a variety of interview preparation resources, including guides, articles, and videos.",
  },
  {
    imgSrc: CardImage,
    heading: "Interview preparation resources",
    content:
      "Get access to a variety of interview preparation resources, including guides, articles, and videos.",
  },
];
export default function Features() {
  return (
    <section className="w-full ">
      <div className="border-b-2 p-8 mx-8 border-[#007BFF] text-center">
        <h1 className="lg:text-5xl text-3xl font-bold">
          Our Platform Features
        </h1>
      </div>
      <div className="flex flex-wrap justify-center lg:flex-row flex-col gap-16 lg:p-16 p-8">
        {RENDERDATA.map((card, idx) => (
          <div
            key={idx}
            className="border w-full hover:scale-105 duration-300 ease-in-out lg:w-1/4"
          >
            <div>
              <Image
                className="w-full aspect-auto"
                src={card?.imgSrc}
                alt="Card Image"
              />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold">{card?.heading}</h4>
              <p className="text-lg my-2">{card?.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
