import { NextResponse } from "next/server";
import { role } from "../response/role";

export const GET = async () => {
  return NextResponse.json(role);
};
