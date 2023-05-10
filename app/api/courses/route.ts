import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import courses from "./data.json";

export async function GET(request: any) {
  return NextResponse.json(courses);
}

export async function POST(request: any) {
  const { title, description, level, link } = await request.json();
  const newCourse = {
    id: parseInt(uuidv4()),
    title,
    description,
    level,
    link,
  };
  courses.push(newCourse);
  return NextResponse.json(courses);
}
