"use client";
import Image from "next/image";
import HeroImage from "../assets/hero.svg";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
  const router = useRouter();
  return (
    <section className="w-full flex flex-col lg:flex-row p-4">
      <div className="lg:my-0 lg:w-1/2 my-16 flex lg:items-center lg:justify-center">
        <div className="lg:w-3/4">
          <h1 className="lg:text-7xl lg:text-left font-bold md:text-center text-4xl">
            InterviewCompass: Your guide to a successful interview.
          </h1>
          <p className="my-4 lg:text-lg">
            InterviewCompass is the all-in-one interview platform that helps you
            prepare for and succeed in interviews, from start to finish.
          </p>
          <button
            className="border text-[#007BFF] text-base font-bold border-[#007BFF] py-2 px-16 hover:bg-[#007BFF] hover:text-white duration-300 ease-linear"
            onClick={() => router.push(`/auth?type=student`)}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="hidden lg:w-1/2 lg:block">
        <Image
          src={HeroImage}
          alt="Hero Section"
          className="w-3/4 aspect-square"
        />
      </div>
    </section>
  );
};

export default Hero;
