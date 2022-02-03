import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),
    // ...add more providers here
  ],
  secret: "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",
});
