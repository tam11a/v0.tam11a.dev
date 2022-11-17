exports.cmds = {
  lastSession: (ip, ts) => {
    return ts && ip
      ? `Welcome to Tam.ENV 11.a.0.1 LTS (GNU/Linux 5.4.0-128-generic x86_64)

* Github:   https://github.com/tam11a
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
  cd: (path, currentDir) => {
    let x;
    if (!this.explore(path)) {
      x = this.getLS(currentDir);
    } else {
      if (this.explore(path)[0] === "root") x = this.getLS(path);
      else {
        x = this.getLS([...this.explore(currentDir), ...this.explore(path)]);
      }
    }
    if (x.startsWith("bash:")) return x;
    else return "";
  },
  ls: (path, currentDir) => {
    if (!this.explore(path)) {
      return this.getLS(currentDir);
    } else {
      if (this.explore(path)[0] === "root") return this.getLS(path);
      else {
        return this.getLS([...this.explore(currentDir), ...this.explore(path)]);
      }
    }
  },
};

exports.explore = (path) => {
  if (path?.[path?.length - 1] == "/")
    path = path.slice(0, path[path?.length - 1]);
  path = path?.split("/");
  if (path?.[0] === "~" || path?.[0] === "") path[0] = "root";
  return path;
};

exports.getLS = (path) => {
  let tempList = this.arrangeLS(
    exports.folders,
    typeof path === "string" ? this.explore(path) : path || []
  );
  if (!tempList)
    return `bash: cannot access '${
      typeof path === "string" ? path : path[path.length - 1]
    }': No such file or directory`;
  let xfiles = ``;
  if (tempList.type === "file")
    xfiles = `bash: ${
      typeof path === "string" ? path : path[path.length - 1]
    }: Not a directory`;
  else
    for (const [key, value] of Object.entries(tempList.ls)) {
      xfiles += `${key}${value.type === "file" ? "*" : ""}
`;
    }
  return xfiles.trim();
};

exports.arrangeLS = (directory, newList) => {
  if (!newList.length) return directory;
  return this.arrangeLS(
    directory?.[newList[0]],
    newList[0] === "ls"
      ? newList.slice(1)
      : newList.length > 1
      ? ["ls", ...newList.slice(1)]
      : newList.slice(1)
  );
};

exports.folders = {
  root: {
    ls: {
      about: {
        ls: {},
        type: "folder",
      },
      experience: {
        ls: {},
        type: "folder",
      },
      work: {
        ls: {},
        type: "folder",
      },
      blogs: {
        ls: {},
        type: "folder",
      },
      "resume.pdf": {
        url: "/resume.pdf",
        type: "file",
      },
    },
    type: "folder",
  },
};