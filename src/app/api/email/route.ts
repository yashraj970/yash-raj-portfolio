import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({
    success: true,
    data: {
      name: "test api",
    },
  });
}

export async function POST(req: Request) {
  return NextResponse.json({
    data: req.body,
  });
}
