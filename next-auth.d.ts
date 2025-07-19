import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      username: string;
      mobileNumber: string;
      gender: string;
      fullName: string;
    } & DefaultSession["user"];
  }

  interface User {
    _id: string;
    username: string;
    role?: string;
    mobileNumber?: string;
    gender: string;
    fullName: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      role: string;
      username: string;
      mobileNumber: string;
      gender: string;
      fullName: string;
    };
  }
}
