"use client";

import { APICall } from "@/app/server/config";
import { ICompanySchema } from "@/interfaces/dbModels/Company";
import { useEffect, useState } from "react";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const [userData, setUserData] = useState<ICompanySchema>();

  useEffect(() => {
    async function fetchData() {
      const { reqStatus, data, message } = await APICall(
        "GET",
        `/api/company?id=${id}`,
      );

      if (reqStatus) {
        console.log(data);
      } else {
        console.error(message);
      }
    }
    fetchData();
  }, [id]);

  return <h1>Data is fetched</h1>;
}
