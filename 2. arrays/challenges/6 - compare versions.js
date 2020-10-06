/* compareVersion.js
Write and export by default compareVersion() function that compares argumented versions.
If version1 > version2, return 1
If version1 < version2, return -1
If version1 = version2, return 0.

Version is a string that contains two numbers split with dot - major version.minor version - 4.12 or 0.2, etc.
Keep in mind that 4.2 < 4.12, as it is second of fourth version versus twelth of fourth version.

0.1 < 1.1 < 1.2 < 1.11 < 13.37
*/

const compareVersion = (a, b) => {
  let vers1 = a.split(".");
  let vers2 = b.split(".");

  for (let i = 0; i < 2; i++) {
    if (~~vers1[i] < ~~vers2[i]) return -1;
    if (~~vers1[i] > ~~vers2[i]) return 1;
  }
  return 0;
};

console.log(compareVersion("3.2", "3.12")); // 1
console.log(compareVersion("0.1", "0.2")); // -1
console.log(compareVersion("0.2", "0.1")); // 1
console.log(compareVersion("4.2", "4.2")); // 0
console.log(compareVersion("0.2", "0.12")); // -1
console.log(compareVersion("3.2", "4.12")); // -1
