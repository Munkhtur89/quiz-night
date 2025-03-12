import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET);

export default async function middleware(req) {
  const token = cookies().get("session")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  try {
    const decoded = await jwtVerify(token, SECRET_KEY);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}

export const config = {
  matcher: ["/admin", "/api/get_team_info", "/api/get_dates"],
};
