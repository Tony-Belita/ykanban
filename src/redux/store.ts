// store.ts

import { configureStore } from "@reduxjs/toolkit"; 
import { setupListeners } from "@reduxjs/toolkit/query";

// créer le redux store
export const store = configureStore({
  reducer: {},
});

// configurer les écouteurs pour les requêtes
setupListeners(store.dispatch);

// définir les types d'actions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// Dans cet extrait de code, configureStore est utilisé pour créer le magasin Redux, et setupListeners est appelé pour gérer les comportements refetchOnFocus et refetchOnReconnect.