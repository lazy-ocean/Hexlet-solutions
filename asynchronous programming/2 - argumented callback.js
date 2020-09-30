/* write.js
Write and export by default asynchronous write() function that writes data for the argumented path and executes callback which is aimed on some kind of a success message.
 */
export default (filepath, data, cb) => {
  fs.writeFile(filepath, data, cb);
};

//// Example - test
write("./myfile", "data", () => {
  console.log("success");
});
// => writes data to ./myfile and than returns 'success' to the console
