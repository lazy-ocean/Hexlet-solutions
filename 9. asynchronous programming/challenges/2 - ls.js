/* ls.js
Write and export by default ls() function that takes a path and returns an array with information about files and directories by that path. Your function should return paths of files/directories along with stat.mode.
Mind that by that path might be just a file or it could be relative path.
*/
const ls = async (origPath) => {
  const stat = await fs.stat(origPath);
  if (stat.isFile()) {
    return [{ filepath: path.resolve(origPath), mode: stat.mode }];
  }
  const names = await fs.readdir(origPath);
  const filePaths = names.map((fileName) => path.join(origPath, fileName));
  let stats = await Promise.all(filePaths.map(fs.stat));
  const modes = stats.map((stat) => stat.mode);
  const arr = _.zip(filePaths, modes);
  return arr.map(([filepath, mode]) => ({ filepath, mode }));
};
export default ls;
