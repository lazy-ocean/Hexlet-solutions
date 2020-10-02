/* watch.js
Write and export by default asynchronous watch() function that checks if the file has been changed once in an argumented period. If the file has been changed since the time of the last check, call callback. If the error occured, stop the timer and return error with callback.
Your function takes:
--- filepath
--- period of checking
--- callback function
*/
import fs from "fs";

const watch = (filepath, time, cb) => {
  const check = (timerId) => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(timerId);
        cb(err);
        return;
      }
      if (Date.now() - stats.mtimeMs < time) {
        cb(null);
        return;
      }
    });
  };
  const timerId = setInterval(() => check(timerId), time);
  return timerId;
};

export default watch;
