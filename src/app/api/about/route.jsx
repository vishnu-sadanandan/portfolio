import { NextResponse } from "next/server";
import {content} from "../response/content"

export const GET = async () => {
    return NextResponse.json(content);
}
