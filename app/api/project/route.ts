import { generateProjectName } from "@/app/action/action";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const session = await getKindeServerSession();
    const user = await session?.getUser();
    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }
    if (!prompt) {
      return new Response("Prompt is required", { status: 400 });
    }
    const projectName = await generateProjectName(prompt);
    const project = await prisma.project.create({
      data: {
        userId: user.id,
        name: projectName,
        theme: "default", // Replace "default" with appropriate theme value
        thumbnail: "", // Replace "" with appropriate thumbnail URL or value
      },
    });

    //trigger Ingest function here to process the project data and generate necessary assets in background

    return NextResponse.json(
      { success: true, message: "Project created successfully", data: project },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create project" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getKindeServerSession();
    const user = await session?.getUser();
    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }
    const projects = await prisma.project.findMany({
      where: {
        userId: user.id,
      },
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      { success: true, message: "Projects retrieved successfully", data: projects },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error retrieving projects:", error);
    return NextResponse.json(
      { success: false, message: "Failed to retrieve projects" },
      { status: 500 }
    );
  }
}
