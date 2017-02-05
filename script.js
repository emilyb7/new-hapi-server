#!/usr/bin/env node

const fs = require('fs');

//const directory = process.env.PWD;

// fs.writeFile("hello.txt", "hello", {}, function() {
//   console.log("done");
// });

const getFiles = (dirs, list = []) => {
  fs.readdir(dirs[0], {}, (err, files) => {
    if (err) {
    } else {
      const trackable = files.filter(f => f.toString()[0] !== '.' && f.toString() !== "node_modules");
      const totalFiles = list.concat(trackable.filter(f => f.split('.').length === 2));
      const directoriesNew = trackable.filter(f => f.split('.').length === 1)
        .map(f => dirs[0] + "/" + f);
      const totalDirs = dirs.concat(directoriesNew);
      if (!!totalDirs[1]) { return getFiles(totalDirs.slice(1), totalFiles); }
    }
    console.log(list);
    return;
  });
}

getFiles(__dirname);
