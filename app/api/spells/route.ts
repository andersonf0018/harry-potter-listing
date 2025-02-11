import { NextResponse } from "next/server";
import { HP_API_URL } from "@/constants";

export const GET = async () => {
  try {
    const res = await fetch(`${HP_API_URL}/spells`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch spells");

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching spells:", error);
    return NextResponse.json(
      { error: "Failed to fetch spells" },
      { status: 500 }
    );
  }
}
