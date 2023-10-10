import { ICompanySchema } from "@/interfaces/dbModels/Company";
import connectDatabase from "@/lib/mongo";
import { createCompany, getCompany } from "@/mongo/auth/function";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDatabase();
  const body: ICompanySchema = await req.json();
  const { status, data, message } = await createCompany(body);
  return NextResponse.json({ message }, { status });
}
