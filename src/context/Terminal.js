import moment from "moment";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// import { cmdlist } from "../utils/cmds";
const {cmdlist} = require('../utils/cmds')

const TerminalContext = React.createContext();

export const TerminalProvider = ({ children }) => {
  // console.log(cmdlist);
  const location = useLocation();
  const navigate = useNavigate();

  const [lastSession] = React.useState({
    ip: localStorage.getItem("ip"),
    ts: localStorage.getItem("ts"),
  });

  React.useEffect(() => {
    if (sessionStorage.getItem("cmds")) return;
    saveLastSessionLog();
  }, []);

  const saveLastSessionLog = async () => {
    const res = await fetch("https://api.ipify.org/?format=json");
    const data = await res.json();
    localStorage.setItem("ts", moment().toISOString());
    localStorage.setItem("ip", data?.ip);
  };

  const [directory, setDirectory] = React.useState(
    `~${location?.pathname || ""}`
  );

  React.useEffect(() => {
    if (!location) return;
    execute(`cd ~${location?.pathname || ""}`);
    setDirectory(`~${location?.pathname || ""}`);
  }, [location]);

  const [cmds, setCmds] = React.useState(
    sessionStorage.getItem("cmds")
      ? JSON.parse(sessionStorage.getItem("cmds"))
      : [
          {
            response: cmdlist.lastSession(
              lastSession?.ip,
              lastSession?.ts ? moment(lastSession?.ts) : undefined
            ),
          },
          {
            cmd: "bash ./session.sh",
            response: "bash: session.sh: No such file or directory",
            dir: directory,
            ts: moment().toLocaleString(),
          },
        ]
  );

  const exec = (cmd, fromTermit) => {
    if (!cmd)
      return {
        cmd,
        ts: moment().toLocaleString(),
        dir: directory,
      };

    var response;

    switch (cmd.split(" ")[0]) {
      case "cd":
        if (cmd.split(" ")[1] === "..") navigate(-1);
        else if (fromTermit)
          navigate(`${cmd.split(" ")[1].replace?.("~", "/")}`);
        else response = cmdlist.cd(cmd.split(" ")[1], directory);
        break;
      case "ls":
        response = cmdlist.ls(cmd.split(" ")[1], directory);
        break;
      case "do-release-upgrade":
        response = "System already up to date.";
        break;
      case "clear":
      case "cls":
        clear();
        break;
      default:
        response = cmdlist.commandNotFound(cmd.split(" ")[0]);
    }

    return {
      cmd,
      response,
      ts: moment().toLocaleString(),
      dir: directory,
    };
  };

  const execute = (cmd, fromTermit) => {
    setTermit("");
    const res = exec(cmd, fromTermit);
    if (res.cmd === "clear" || res.cmd === "cls" || fromTermit) return;
    sessionStorage.setItem("cmds", JSON.stringify([...cmds, res]));
    setCmds(JSON.parse(sessionStorage.getItem("cmds")));
  };

  const clear = () => {
    sessionStorage.setItem("cmds", JSON.stringify([]));
    setCmds(JSON.parse(sessionStorage.getItem("cmds")));
  };

  const [termit, setTermit] = React.useState("");

  return (
    <TerminalContext.Provider
      value={{
        cmds: cmds,
        termit,
        setTermit,
        execute,
        directory,
        navigate,
      }}
    >
      {children}
      <input style={{ display: "none" }} autoFocus />
    </TerminalContext.Provider>
  );
};

export default TerminalContext;
