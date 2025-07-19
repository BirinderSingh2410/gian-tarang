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
        // if(token?.role == 'admin') return true
        const { pathname } = req.nextUrl;
        if (pathname.startsWith("/")) {
          // define path
          return !!token;
        }
        return true;
      },
    },
  }
);

export const config = { matcher: ["/view/:path*"] };
