import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = { // fournisseur d'authentification
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, 
};

export default authOptions;

//Ici, nous avons importé le type NextAuthOptions fourni par next-auth pour des raisons de sécurité de type concernant la variable options.

//Dans le code ci-dessus, l'objet options est l'endroit où le fournisseur que nous voulons utiliser sera logé (le fournisseur Google dans ce cas).