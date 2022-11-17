export const cmdlist = {
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
    if (!explore(path)) {
      x = getLS(currentDir);
    } else {
      if (explore(path)[0] === "root") x = getLS(path);
      else {
        x = getLS([...explore(currentDir), ...explore(path)]);
      }
    }
    if (x.startsWith("bash:")) return x;
    else return "";
  },
  ls: (path, currentDir) => {
    if (!explore(path)) {
      return getLS(currentDir);
    } else {
      if (explore(path)[0] === "root") return getLS(path);
      else {
        return getLS([...explore(currentDir), ...explore(path)]);
      }
    }
  },
};

export const explore = (path) => {
  if (path?.[path?.length - 1] === "/")
    path = path.slice(0, path[path?.length - 1]);
  path = path?.split("/");
  if (path?.[0] === "~" || path?.[0] === "") path[0] = "root";
  return path;
};

export const getLS = (path) => {
  let tempList = arrangeLS(
    folders,
    typeof path === "string" ? explore(path) : path || []
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

export const arrangeLS = (directory, newList) => {
  if (!newList.length) return directory;
  return arrangeLS(
    directory?.[newList[0]],
    newList[0] === "ls"
      ? newList.slice(1)
      : newList.length > 1
      ? ["ls", ...newList.slice(1)]
      : newList.slice(1)
  );
};

export const folders = {
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
