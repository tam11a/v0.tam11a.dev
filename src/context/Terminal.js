import React from "react";

const TerminalContext = React.createContext();

export const TerminalProvider = ({ children }) => {
  const [cmds, setCmds] = React.useState([
    {
      cmd: "bash ./run.sh",
      response: "bash: run.sh: No such file or directory",
    },
  ]);
  return (
    <TerminalContext.Provider
      value={{
        cmds: cmds,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
};

export default TerminalContext;
