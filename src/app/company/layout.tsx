"use client";

import { APICall } from "@/app/server/config";
import AppBar from "@/components/Dashboard/AppBar";
import TopBar from "@/components/Dashboard/TopBar";
import { ICompanySchema } from "@/interfaces/dbModels/Company";
import { IStudent } from "@/interfaces/dbModels/Student";
import { CompanyItems } from "@/utils/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [fullScreenMenu, setFullScreenMenu] = useState<boolean>(false);

  const [userData, setUserData] = useState<IStudent | ICompanySchema>();
  const token = localStorage.getItem("ACCESSTOKEN");
  const router = useRouter();

  useEffect(() => {
    async function fetchProfile() {
      const { reqStatus, data, message } = await APICall(
        "GET",
        `/api/profile?type=company`,
        {},
        {
          Authorization: `Bearer ${token}`,
        },
      );

      if (reqStatus) {
        setUserData(data);
      } else {
        alert(message);
        router.push("/auth?type=company");
      }
    }
    fetchProfile();
  }, [token]);

  return (
    <main className="min-h-screen h-full w-full flex">
      <AppBar
        title="InterviewCompass"
        menuOptions={CompanyItems}
        handleChange={setSelectedIndex}
        selectedIndex={selectedIndex}
        handleWidth={() => setFullScreenMenu(!fullScreenMenu)}
        isFullScreen={fullScreenMenu}
      />
      <section className="w-full">
        <TopBar />
        {children}
      </section>
    </main>
  );
}
