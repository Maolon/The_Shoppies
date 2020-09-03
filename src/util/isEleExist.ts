import { Noms } from "../hooks/nomReducer";

export const isEleExist = (noms: Noms, id: string) => {
  for (let itm of noms.data) {
    if (itm.imdbID === id) return true;
  }
  return false;
};
