import { createContext, useState } from "react";

export const MyStore = createContext();
export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [bttn, setBttn] = useState([]);
  return (
    <MyStore.Provider value={{ toggle, setToggle, bttn, setBttn }}>
      {children}
    </MyStore.Provider>
  );
};
