import NextAuth from "next-auth/next"; 
import options from "./options"; // import des options d'authentification

const handler = NextAuth(options); // création du gestionnaire d'authentification avec les options

export { handler as GET, handler as POST }; // exportation des méthodes GET et POST
//Ici, nous avons importé la variable options du fichier option.ts et l'avons passée en paramètre à la fonction NextAuth, en assignant le résultat à la variable handler.

//La déclaration finale garantit que toute requête GET ou POST envoyée à la route api/auth/nextauth sera gérée par next-auth.js.
