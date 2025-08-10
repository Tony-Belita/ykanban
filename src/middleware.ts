export { default } from "next-auth/middleware"; // exportation du middleware d'authentification

export const config = { matcher: ["/"] }; // configuration du middleware pour protéger les routes