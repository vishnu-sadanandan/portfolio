import { NextResponse } from "next/server";
import {project} from "../response/project"

export const GET = async () => {
    return NextResponse.json(project);
}
