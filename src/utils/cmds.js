exports.cmds = {
  lastSession: (ip, ts) => {
    return ts && ip
      ? `Welcome to Tam.ENV 11.a.0.1 LTS (GNU/Linux 5.4.0-128-generic x86_64)

* Github:   https://github.com/tam11a
* Repo:     https://github.com/tam11a/tam11a
* Support:  ibrahimsadiktamim@gmail.com

New release '11.a.0.1 LTS' available.
Run 'do-release-upgrade' to upgrade to it.

Last login: ${ts} from ${ip}
`
      : "";
  },
  commandNotFound: (cmd) => {
    return `Command '${cmd}' not found, but there are 0 similar ones.`;
  },
  cd: (newDir, currentDir) => {
    return `bash: cd: ${newDir}: No such file or directory`;
  },
};

exports.folders = {
  root: {},
};