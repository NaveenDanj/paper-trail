import { NextResponse } from 'next/server';
import { GetFlashSales } from "@/actions/ProductAction";

export async function GET() {
  const data = await GetFlashSales();
  return NextResponse.json(data);
}