"use client";

import { APICall } from "@/app/server/config";
import CompanyAbout from "@/components/Dashboard/Profile/CompanyAbout";
import CompanyContact from "@/components/Dashboard/Profile/CompanyContact";
import CompanyDetails from "@/components/Dashboard/Profile/CompanyDetails";
import { ICompanySchema } from "@/interfaces/dbModels/Company";
import { IStudent } from "@/interfaces/dbModels/Student";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
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
        setUserData(data?.data);
      } else {
        alert(message);
        router.push("/auth?type=company");
      }
    }
    fetchProfile();
  }, [token]);

  return (
    <section className="p-8">
      <CompanyDetails profile={userData as ICompanySchema} />
      <div className="flex">
        <CompanyAbout profile={userData as ICompanySchema} />
        <CompanyContact profile={userData as ICompanySchema} />
      </div>
    </section>
  );
}
