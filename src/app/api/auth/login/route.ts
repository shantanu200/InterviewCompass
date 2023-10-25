import { ICompanySchema } from "@/interfaces/dbModels/Company";
import { IStudent } from "@/interfaces/dbModels/Student";
import connectDatabase from "@/lib/mongo";
import { getCompany, getStudent } from "@/mongo/auth/function";
import { createToken } from "@/utils/token";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDatabase();
  const body: ICompanySchema & IStudent = await req.json();
  const url = new URL(req.url);

  const type = url.searchParams.get("type");

  let respData;

  if (type === "student") {
    respData = await getStudent(body.email);

    if (respData.data?.password === body.password) {
      const token = await createToken(
        {
          sub: respData.data._id,
        },
        { exp: "30days" },
      );
      return NextResponse.json(
        {
          data: respData.data,
          token,
          message: respData?.message,
        },
        { status: respData.status },
      );
    }
  } else {
    respData = await getCompany(body.email);

    if (respData.data?.password === body.password) {
      const token = await createToken(
        {
          sub: respData.data._id,
        },
        { exp: "30days" },
      );
      return NextResponse.json(
        {
          data: respData.data,
          token,
          message: respData?.message,
        },
        { status: respData.status },
      );
    }
  }

  return NextResponse.json(
    { message: "Password not matched" },
    { status: 404 },
  );
}
