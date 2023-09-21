import { NextResponse } from "next/server";
import connect from "@/app/utils/db";

export const GET = async () => {
  try {
    await connect();
    console.log('we are outside')
    // const posts: any = await BlogPost.find();
    const posts: string = 'it is working'
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
