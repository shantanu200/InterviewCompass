import connectDatabase from "@/lib/mongo";
import verifyUser from "@/utils/verifyUser";
import { Strait } from "next/font/google";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const accessToken = req.headers.get("authorization");
  const type = new URL(req.url).searchParams.get("type");
  const { verified, data, message, error } = await verifyUser(
    String(accessToken),
    String(type),
  );

  if (verified) {
    return NextResponse.json({ data }, { status: 200 });
  } else {
    return NextResponse.json({ message, error }, { status: 404 });
  }
}
