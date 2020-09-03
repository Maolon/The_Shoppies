import { message } from "antd/es";

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Noms {
  data: Movie[];
}

export const initialState: Noms = {
  data: [],
};

interface Action {
  type: string;
  id: string;
  payload: Movie;
}

export const nomReducer = (state: Noms, action: Action) => {
  switch (action.type) {
    case "ADD_NORM":
      message.success("Success Add A Nominated Movie")
      return { data: [...state.data, action.payload] };
    case "DEL_NORM":
      message.success("Success Delete A Nominated Movie")  
    return {
        data: [...state.data.filter((itm) => itm.imdbID !== action.id)],
      };
    default:
      return state;
  }
};
