import { NextRequest, NextResponse } from 'next/server';
import { GetProductInfo } from "@/actions/ProductAction";

interface Params {
    params: {
      id: string;
    };
}

export async function GET(request: NextRequest, { params }:Params) {
    const { id } = params;
    console.log("id is => " , id)
    const data = await GetProductInfo(id);
    return NextResponse.json(data);
}