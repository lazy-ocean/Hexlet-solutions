/* generator.js
Write and export by default generate() function that creates file system like this:

nodejs-package # directory (metadata: { hidden: true })
├── Makefile ##### file
├── README.md ##### file
├── dist ##### directory
├── __tests__ ##### directory
│   └── half.test.js ##### file (metadata: { type: 'text/javascript' })
├── babel.config.js ##### file (metadata: { type: 'text/javascript' })
└── node_modules ##### directory (metadata: { owner: 'root', hidden: false })
    └── @babel ##### directory
        └── cli ##### directory
            └── LICENSE ##### file

Use preset mkdir and mkfile functions. Your task is not to write functions itself but to exactly repeat file tree using it.
*/

import { mkdir, mkfile } from "@hexlet/immutable-fs-trees";

const generate = () => {
  const tree = mkdir(
    "nodejs-package",
    [
      mkfile("Makefile"),
      mkfile("README.md"),
      mkdir("dist"),
      mkdir("__tests__", [mkfile("half.test.js", { type: "text/javascript" })]),
      mkfile("babel.config.js", { type: "text/javascript" }),
      mkdir(
        "node_modules",
        [mkdir("@babel", [mkdir("cli", [mkfile("LICENSE")])])],
        { owner: "root", hidden: false }
      ),
    ],
    { hidden: true }
  );
  return tree;
};

export default generate;
