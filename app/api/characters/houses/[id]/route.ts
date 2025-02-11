import { HP_API_URL } from "@/constants";
import { NextResponse } from "next/server";

interface HouseRouteParams {
    id: string;
}

export const GET = async (
    _request: Request,
    { params }: { params: Promise<HouseRouteParams> }
) => {
    try {
        const { id } = await params;
        const res = await fetch(`${HP_API_URL}/characters/house/${id}`, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) throw new Error(`Failed to fetch house: ${id}`);

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error(`Error fetching house:`, error);
        return NextResponse.json(
            { error: "Failed to fetch house" },
            { status: 500 }
        );
    }
}