/* makeTimer.js
Write and export by default makeTimer() function that returns object-timer. Every 100 ms it calls the callback with two parameters: state: working and elapsedTime with ms past from the start of the timer. When timing is over, it calles callback with the state: finished.
*/

export default (totalTime, cb) => ({
  // BEGIN (write your solution here)
  elapsedTime: 0,
  totalTime: totalTime,
  start: function () {
    let countdown = setInterval(() => {
      this.elapsedTime += 100;
      if (this.elapsedTime > this.totalTime) {
        clearInterval(countdown);
        return cb({ state: "finished" });
      }
      return cb({ state: "working", elapsedTime: this.elapsedTime });
    }, 100);
  },
  // END
});
