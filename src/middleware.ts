import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware() {
    return NextResponse.next();
  },
  {
    callbacks: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      authorized: ({ token, req }) => {
        // const { pathname } = req.nextUrl;

        // Block everything if not logged in
        if (!token) return false;

        // Role-based logic
        // if (pathname.startsWith("/admin") && token.user?.role !== "admin") {
        //   return false;
        // }

        // Allow everything else
        return true;
      },
    },
  }
);

export const config = { matcher: ["/view/:path*", "/api/:path*"] };
