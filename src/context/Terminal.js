import React from "react";

const TerminalContext = React.createContext();

export const TerminalProvider = ({ children }) => {
  return <TerminalContext.Provider>{children}</TerminalContext.Provider>;
};

export default TerminalContext;
