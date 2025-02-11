import { NextResponse } from "next/server";
import { HP_API_URL } from "@/constants";

interface CharacterRouteParams {
  id: string;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<CharacterRouteParams> }
) {
  try {
    const { id } = await params;
    const res = await fetch(`${HP_API_URL}/character/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch character");

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching character:`, error);
    return NextResponse.json(
      { error: "Failed to fetch character" },
      { status: 500 }
    );
  }
}
