import { ICompanySchema } from "@/interfaces/dbModels/Company";
import { IStudent } from "@/interfaces/dbModels/Student";
import connectDatabase from "@/lib/mongo";
import {
  createCompany,
  createStudent,
  getCompany,
} from "@/mongo/auth/function";
import { create } from "domain";

import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  await connectDatabase();
  const body: ICompanySchema & IStudent = await req.json();
  const url = new URL(req.url);
  const type = url.searchParams.get("type");

  console.log(type);

  let respData;

  if (type === "student") {
    respData = await createStudent(body);
  } else {
    respData = await createCompany(body);
  }

  return NextResponse.json(
    { message: respData?.message, data: respData?.data },
    { status: respData?.status },
  );
}
