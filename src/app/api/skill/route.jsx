import { NextResponse } from "next/server";
import {skill} from "../response/skill"

export const GET = async () => {
    return NextResponse.json(skill);
}
