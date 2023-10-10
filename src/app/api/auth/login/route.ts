import { ICompanySchema } from "@/interfaces/dbModels/Company";
import connectDatabase from "@/lib/mongo";
import { getCompany } from "@/mongo/auth/function";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDatabase();
  const body: ICompanySchema = await req.json();

  const { status, data, message } = await getCompany(body.email);

  return NextResponse.json({ data, message }, { status });
}
