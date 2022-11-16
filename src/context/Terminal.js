import React from "react";

const TerminalContext = React.createContext();

export const TerminalProvider = ({ children }) => {
  return (
    <TerminalContext.Provider value={{}}>{children}</TerminalContext.Provider>
  );
};

export default TerminalContext;
