import UserModel from "@/app/models/User";
import { dbConnect } from "@/lib/db";
import bcrypt from "bcryptjs";
import { AuthOptions, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Credential object is null");
        }
        if (!credentials?.password || !credentials?.username) {
          throw new Error("Username and Password field is required");
        }
        try {
          await dbConnect();
          const user = await UserModel.findOne({
            username: credentials?.username,
          });
          if (!user) {
            throw new Error("No user found with the username");
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordCorrect) {
            throw new Error("Password is incorrect");
          }
          return user;
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: "/register",
     error: "/register"
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // async redirect(){
    //   return '/view/dashboard'
    // },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.user.id;
        session.user.role = token.user.role;
        session.user.mobileNumber = token.user.mobileNumber;
        session.user.username = token.user.username;
        session.user.fullName = token.user.fullName;
        session.user.gender = token.user.gender;
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user: User }) {
      console.log(user);
      if (user) {
        token.user = {
          id: user._id,
          username: user.username,
          role: user.role || "",
          mobileNumber: user.mobileNumber || "",
          fullName: user.fullName,
          gender: user.gender,
        };
      }
      return token;
    },
  },
};
