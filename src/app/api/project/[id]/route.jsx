import { NextResponse } from "next/server";
import { project } from "../response/project";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params; // Unwrap params
  const foundProject = project.find((proj) => proj.id === id); // Find project by ID

  if (!foundProject) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(foundProject);
};
