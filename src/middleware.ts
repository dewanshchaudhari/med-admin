import { NextRequest, NextResponse } from "next/server";
import { env } from "./env";

export const config = {
  matcher: ["/:anything"],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue ?? "").split(":");

    const validUser = env.USERNAME;
    const validPassWord = env.PASSWORD;

    if (user === validUser && pwd === validPassWord) {
      return NextResponse.next();
    }
  }

  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
