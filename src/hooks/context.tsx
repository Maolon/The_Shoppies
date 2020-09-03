import React, { createContext, useReducer } from 'react';
import { nomReducer, initialState, Noms } from './nomReducer';


const AppContext = createContext<{
  state: Noms;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});


const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(nomReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };