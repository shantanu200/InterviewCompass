import connectDatabase from "@/lib/mongo";
import { getCompany, updateCompany } from "@/mongo/auth/function";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

// Update Compnay Details
export async function PUT(req: NextRequest) {
  await connectDatabase();

  const body = await req.json();

  const id = req.nextUrl.searchParams.get("id") as string;

  const { status, data, message } = await updateCompany(id, body);

  return NextResponse.json({ message }, { status });
}

export async function GET(req: NextRequest) {
  await connectDatabase();

  const id = req.nextUrl.searchParams.get("id") as string;

  const { status, data, message } = await getCompany(id);

  return NextResponse.json({ data }, { status });
}
