import { NextResponse } from 'next/server';
import { GetBestSellingProducts } from "@/actions/ProductAction";

export async function GET() {
  const data = await GetBestSellingProducts(10);
  return NextResponse.json(data);
}