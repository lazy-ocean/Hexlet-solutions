/* compareFileSizes.js
Write and export asynchronous compareFileSizes() function that compares sizes of two files. If the first one is bigger than the second, return 1, otherwise -1 and 0 if equal. Result returns via argumented callback function.
Example of execution: 
=> compareFileSizes('file1', 'file2', (_err, result) => console.log(result));
 */

export const compareFileSizes = (f1, f2, cb) => {
  fs.stat(f1, (_error1, stats1) => {
    fs.stat(f2, (_error2, stats2) => {
      const result = Math.sign(stats1.size - stats2.size);
      cb(null, result);
    });
  });
};
