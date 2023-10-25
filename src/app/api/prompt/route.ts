import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const { messages } = await request.json();

  const url = "https://api.openai.com/v1/chat/completions";

  const body = JSON.stringify({
    messages: [{ role: "user", content: "Hello, how are you?" }],
    model: "gpt-3.5-turbo",
    stream: false,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GPTAPI}`,
      },
      body,
    });
    const data = await response.json();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
