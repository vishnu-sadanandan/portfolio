import { NextResponse } from "next/server";
import {menu} from "../response/menu"

export const GET = async () => {
    return NextResponse.json(menu);
}
