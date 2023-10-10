"use client";
import FormBox from "@/components/Auth/FormBox";
import ImageBox from "@/components/Auth/ImageBox";
import connectDatabase from "@/lib/mongo";
import { useEffect } from "react";

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-[#B2D8FF] flex justify-center items-center">
      <div className="bg-white flex w-3/4 shadow-md rounded-lg">
        <ImageBox className="hidden xl:flex" />
        <FormBox className="flex-1" />
      </div>
    </main>
  );
}
