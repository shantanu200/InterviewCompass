const RENDERDATA = [
  {
    heading: "Increased confidence",
    content:
      "Our interview preparation resources and mock interview tools will help you to feel more confident in your interview skills.",
  },
  {
    heading: "Increased confidence",
    content:
      "Our interview preparation resources and mock interview tools will help you to feel more confident in your interview skills.",
  },
  {
    heading: "Increased confidence",
    content:
      "Our interview preparation resources and mock interview tools will help you to feel more confident in your interview skills.",
  },
];
export default function Benfits() {
  return (
    <section className="w-full bg-[#007BFF] p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Benfits Section</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-16 my-16">
        {RENDERDATA?.map((card, idx) => (
          <div
            key={idx}
            className="w-1/4 border border-white border-lg text-white p-8 hover:bg-white hover:text-[#007BFF] duration-300"
          >
            <h1 className="text-4xl font-bold ">0{idx + 1}.</h1>
            <h1 className="text-3xl font-bold my-4">{card?.heading}</h1>
            <p className="text-lg mb-8">{card?.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
