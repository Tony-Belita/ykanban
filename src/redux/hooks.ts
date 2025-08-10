

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

//Ce code crée des versions typées des hooks useDispatch et useSelector pour assurer la sécurité de type lors de l'interaction avec le magasin Redux.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
