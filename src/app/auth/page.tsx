"use client";
import FormBox from "@/components/Auth/FormBox";
import ImageBox from "@/components/Auth/ImageBox";
import LoginBox from "@/components/Auth/LoginBox";
import connectDatabase from "@/lib/mongo";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  const [isCompanyLogin, setIsCompanyLogin] = useState<boolean>(true);
  const [isStudentLogin, setIsStudentLogin] = useState<boolean>(true);
  return (
    <main className="w-full min-h-screen bg-[#B2D8FF] flex justify-center items-center">
      {type === "company" ? (
        isStudentLogin ? (
          <div className="w-2/5 shadow-md rounded-lg bg-white">
            <div className="p-16 text-4xl bg-[#007BFF] text-white rounded-t-lg font-bold">
              Login Here
            </div>
            <LoginBox className="w-full" setIsLogin={setIsStudentLogin} />
          </div>
        ) : (
          <div className="bg-white flex w-3/4 shadow-md rounded-lg">
            <ImageBox className="hidden xl:flex" />
            <FormBox className="flex-1" />
          </div>
        )
      ) : (
        <div>Hello 2</div>
      )}
    </main>
  );
}
