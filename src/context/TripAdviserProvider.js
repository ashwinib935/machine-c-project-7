import React, { createContext, useContext, useReducer } from "react";
import { data } from "../data/data";

export const TripAdviserContext = createContext();
const handleData = (state, action) => {};
function TripAdviserProvider({ children }) {
  const [state, dispatch] = useReducer(handleData, data);
  return (
    <TripAdviserContext.Provider value={{ state, dispatch }}>
      {children}
    </TripAdviserContext.Provider>
  );
}

export const useTrip = () => useContext(TripAdviserContext);
export default TripAdviserProvider;
