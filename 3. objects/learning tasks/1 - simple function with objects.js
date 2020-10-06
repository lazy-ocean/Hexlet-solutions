/* json.js
Write and export by default function that returns a content of a json file:

{
  "common": {
    "files": [
      "src/objects.js"
    ]
  },
  "config": {
    "outdir": "/dist"
  }
}

*/

const json = () => ({
  common: { files: ["src/objects.js"] },
  config: { outdir: "/dist" },
});

export default json;
