import { store } from "./store";
import { Provider } from "react-redux";

// Fournir le magasin Redux à l'application
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}