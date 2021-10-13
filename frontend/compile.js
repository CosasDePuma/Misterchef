const fs = require("fs");
const path = require("path");
const { version } = require("./package.json");

// Version
fs.writeFileSync(path.resolve(__dirname, "../version"), version);

// HTML
fs.writeFileSync(
  path.resolve(__dirname, "../backend/public/index.go"),
  "// Code generated by Misterchef; pls :3, DO NOT EDIT.\n\npackage public\n\n// Index contains the HTML code\nconst Index = `".concat(
    fs
      .readFileSync(path.resolve(__dirname, "./dist/index.html"), "utf8")
      .replace(/src="\//g, 'src="')
      .concat("`")
  )
);

// JS
fs.writeFileSync(
  path.resolve(__dirname, "../backend/public/app.go"),
  "// Code generated by Misterchef; pls :3, DO NOT EDIT.\n\npackage public\n\n// App contains the HTML code\nconst App = `".concat(
    fs
      .readFileSync(path.resolve(__dirname, "./dist/app.js"), "utf8")
      .replace(/\/\*[^/]*\/\s+/g, "")
      .replace(/`/g, '` + "`" + `')
      .concat("`")
  )
);
