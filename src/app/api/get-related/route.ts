import {  NextResponse } from 'next/server';
import { GetRelatedProducts } from "@/actions/ProductAction";

export async function GET() {
    const data = await GetRelatedProducts();
    return NextResponse.json(data);
  }

