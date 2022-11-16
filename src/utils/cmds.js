exports.cmds = {
  lastSession: (ip, ts) => {
    
    return ts && ip
      ? `Welcome to Ubuntu 20.04.5 LTS (GNU/Linux 5.4.0-128-generic x86_64)

    * Documentation:  https://help.ubuntu.com
    * Management:     https://landscape.canonical.com
    * Support:        https://ubuntu.com/advantage
   New release '22.04.1 LTS' available.
   Run 'do-release-upgrade' to upgrade to it.
   
   Last login: ${ts} from ${ip}`
      : "";
  },
  commandNotFound: (cmd) => {
    return `Command '${cmd}' not found, but there are 0 similar ones.`;
  },
  cd: (newDir, currentDir) => {
    return `bash: cd: ${newDir}: No such file or directory`;
  },
};
