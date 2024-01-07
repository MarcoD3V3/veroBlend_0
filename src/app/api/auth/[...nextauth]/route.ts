"use client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authoptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECRET,
};
const handler = NextAuth(authoptions);
export { handler as GET, handler as POST };
