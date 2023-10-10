"use client";
import PrimaryButton from "@/common/PrimaryButton";
import { useState } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";

const Navbar: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
    <nav className="p-6 bg-[#007BFF] flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-1/3 flex justify-between items-center sm:w-full sm:flex sm:items-center sm:justify-between">
        <h1 className="text-3xl lg:px-32 font-bold text-white">
          InterviewCompass
        </h1>
        <BsMenuButtonWideFill
          className="lg:hidden text-white text-3xl cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      </div>
      <ul
        className="
        hidden
        lg:flex
        lg:gap-12
        lg: items-center
        "
      >
        <li className="text-xl text-white font-semibold">Home</li>
        <li className="text-xl text-white font-semibold">Jobs</li>
        <li className="text-xl text-white font-semibold">Interview</li>
        <li className="text-xl text-white font-semibold">Contact</li>
        <li className="text-xl text-white font-semibold p-2 bg-[#28A745]">
          <a>Schedule Interview</a>
        </li>
      </ul>

      {mobileMenu && (
        <ul className="lg:hidden w-full flex flex-col gap-8 items-start duration-300 ease-in-out">
          <li className="text-xl text-white font-semibold mt-8">Home</li>
          <li className="text-xl text-white font-semibold">Jobs</li>
          <li className="text-xl text-white font-semibold">Interview</li>
          <li className="text-xl text-white font-semibold">Contact</li>
          <li className="text-xl text-white font-semibold p-2 bg-[#28A745]">
            <a>Schedule Interview</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
