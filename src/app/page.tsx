import Sidebar from "./components/Sidebar"
import BoardTasks from "./components/BoardTasks"
// Méthodes Firestore : collection et getDocs pour la référence à un document, addDoc pour l'ajout d'un document
import { collection, getDocs, addDoc } from "firebase/firestore";
// Connecter notre application à Firestore
import { db } from "../utils/firebaseConfig";
import { useEffect, useState } from "react";
// Importer getSession de la bibliothèque next-auth pour récupérer les détails de l'utilisateur connecté
import { getSession } from "next-auth/react";
// Importer les données de data.json, utilisées pour initialiser la base de données Firestore pour les nouveaux utilisateurs
import { data } from "../utils/data.js";


export default function Home() { // page principal

  // État pour stocker les détails de l'utilisateur
  const [userDetails, setUserDetails] = useState<{ [key: string]: any }>();

  // Fonction pour récupérer la session utilisateur
  const getUserSession = async () => {
    const session = await getSession();
    if (session) {
      setUserDetails(session.user);
    }
  };


  // Fonction pour ajouter un document à Firestore
  const handleAddDoc = async () => {
    if (userDetails) {
      // Exécuter le code à l'intérieur des accolades uniquement lorsque `userDetails` est vrai.

      // Référence au document avec l'e-mail de l'utilisateur pour vérifier son existence dans la base de données.
      const docRef = collection(db, "users", userDetails.email, "tasks");
      const getDos = await getDocs(docRef);

      // Vérifier si le document existe déjà dans la base de données.
      if (getDos.docs.length > 0) {
   ;     return;
      } else {
        // Si non, soumettre un nouveau document contenant les données de data.js pour l'utilisateur dans la base de données.
        try {
          await addDoc(
            collection(db, "users", userDetails.email, "tasks"),
            data
          );
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    }
  };

  useEffect(() => {
    getUserSession(); // appeler la fonction getUserSession après le rendu de la page.
  }, []);

  useEffect(() => {
    handleAddDoc(); // appeler la fonction handleAddDoc après la mise à jour des détails de l'utilisateur.
  }, [userDetails]);
  
  
  
  
  
  return (
    <main className="flex h-full">
      <BoardTasks />
      <Sidebar />
    </main>
  )
}