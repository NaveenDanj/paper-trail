import {  NextResponse } from 'next/server';
import { GetRandomProductList } from "@/actions/ProductAction";

export async function GET() {
    const data = await GetRandomProductList();
    return NextResponse.json(data);
  }

