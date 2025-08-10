import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import Google from "next-auth/providers/google";
import { generateFromEmail } from "unique-username-generator";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const existingUser = await prisma.user.findUnique({
          where: { id: user.id },
        });

        if (existingUser && !existingUser.username) {
          const generatedUsername = generateFromEmail(String(user.email));

          await prisma.user.update({
            where: { id: existingUser.id },
            data: { username: generatedUsername },
          });
          token.username = generatedUsername;
        } else {
          token.username = existingUser?.username;
        }
        token.roles = user.roles;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.sub;
      session.user.roles = token.roles as string[];
      session.user.username = token.username as string;
      return session;
    },
  },
});
