import { ICompanySchema } from "@/interfaces/dbModels/Company";
import connectDatabase from "@/lib/mongo";
import { getCompany, updateCompany } from "@/mongo/auth/function";
import verifyUser from "@/utils/verifyUser";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

// Update Compnay Details
export async function PUT(req: NextRequest) {
  const body = await req.json();
  const accessToken = req.headers.get("authorization");
  const type = new URL(req.url).searchParams.get("type");
  const { verified, data, message, error } = await verifyUser(
    String(accessToken),
    "company",
  );

  if (verified) {
    const resData = await updateCompany(String(data._id), body);
    return NextResponse.json(
      { data: resData.data, message: resData.message },
      { status: resData.status },
    );
  } else {
    return NextResponse.json(
      {
        message,
        error,
      },
      { status: 404 },
    );
  }
}

export async function GET(req: NextRequest) {
  await connectDatabase();

  const id = req.nextUrl.searchParams.get("id") as string;

  const { status, data, message } = await getCompany(id);

  return NextResponse.json({ data }, { status });
}
