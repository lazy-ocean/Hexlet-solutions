/* alarmClock.js
Write an interface for an alarm clock. It has three buttons and three states:
Buttons:
--- H: increment shown hours by one
--- M: increment shown minutes by one
--- mode: sets clock to the alarm mode
--- long push on mode: activates alarm

Modes:
--- clock mode: current time + you can set your time by H and M buttons
!!! H and M buttons are not connected in any case: when we click M and minutes go from 59 to 0, hours do not change.
--- alarm mode: you can set alarm time using H and M buttons and activate-deactivate it with long push on Mode button
--- bell mode: when the current time = alarm time, bell mode is activated: it could be deactivated by Mode button or in a minute.
All methods:
clickMode() - mode button push
longClickMode() - long mode button push
clickH() - H button push
clickM() - M button push
tick() - imitates time flowing, increments minutes by one, hours if 59 minutes and triggers bell if times match
isAlarmOn() - returns if the alarm is activated
isAlarmTime() - returns true if current and alarm time match
minutes() - returns current minutes
hours() - returns current hours
alarmMinutes() - returns set alarm minutes
alarmHours() - returns set alarm hours
getCurrentMode() - returns current setting - (alarm | clock | bell)
*/

///////// GENERAL CLOCK CLASS
class AlarmClock {
  constructor() {
    this.min = 0;
    this.h = 12;
    this.alMinutes = 0;
    this.alHours = 6;
    this.states = {
      alarm: AlarmState,
      clock: ClockState,
      bell: BellState,
    };
    this.state = new this.states.clock(this);
    this.alState = false;
  }
  clickMode() {
    this.state.clickMode(this);
  }
  longClickMode() {
    this.state.longClickMode(this);
  }
  clickH() {
    this.state.clickH(this);
  }
  clickM() {
    this.state.clickM(this);
  }
  tick() {
    this.state.tick(this);
  }
  isAlarmOn() {
    return this.alState;
  }
  isAlarmTime() {
    return this.h === this.alHours && this.min === this.alMinutes;
  }
  minutes() {
    return this.min;
  }
  hours() {
    return this.h;
  }
  alarmMinutes() {
    return this.alMinutes;
  }
  alarmHours() {
    return this.alHours;
  }
  getCurrentMode() {
    return this.state.getCurrentMode();
  }
}

//////////// CLOCK STATE
class ClockState {
  constructor(commonSt) {
    this.commonSt = commonSt;
  }
  clickMode() {
    this.commonSt.state = new this.commonSt.states.alarm(this.commonSt);
  }
  longClickMode() {
    this.commonSt.alState
      ? (this.commonSt.alState = false)
      : (this.commonSt.alState = true);
  }
  clickH() {
    this.commonSt.h < 23 ? (this.commonSt.h += 1) : (this.commonSt.h = 0);
  }
  clickM() {
    this.commonSt.min < 59 ? (this.commonSt.min += 1) : (this.commonSt.min = 0);
  }
  tick() {
    if (this.commonSt.min < 59) {
      this.commonSt.min += 1;
    } else {
      this.commonSt.min = 0;
      this.clickH();
    }
    if (this.commonSt.isAlarmTime() && this.commonSt.isAlarmOn())
      this.commonSt.state = new this.commonSt.states.bell(this.commonSt);
  }
  getCurrentMode() {
    return "clock";
  }
}

//////// ALARM STATE
class AlarmState {
  constructor(commonSt) {
    this.commonSt = commonSt;
  }
  clickMode() {
    this.commonSt.state = new this.commonSt.states.clock(this.commonSt);
  }
  longClickMode() {
    this.commonSt.alState
      ? (this.commonSt.alState = false)
      : (this.commonSt.alState = true);
  }
  clickH() {
    this.commonSt.alHours < 23
      ? (this.commonSt.alHours += 1)
      : (this.commonSt.alHours = 0);
  }
  clickM() {
    this.commonSt.alMinutes < 59
      ? (this.commonSt.alMinutes += 1)
      : (this.commonSt.alMinutes = 0);
  }
  tick() {
    if (this.commonSt.min < 59) {
      this.commonSt.min += 1;
    } else {
      this.commonSt.min = 0;
      this.commonSt.h < 23 ? (this.commonSt.h += 1) : (this.commonSt.h = 0);
    }
    if (this.commonSt.isAlarmTime() && this.commonSt.isAlarmOn())
      this.commonSt.state = new this.commonSt.states.bell(this.commonSt);
  }
  getCurrentMode() {
    return "alarm";
  }
}

/////////// BELL STATE
class BellState {
  constructor(commonSt) {
    this.commonSt = commonSt;
  }
  clickMode() {
    this.commonSt.state = new this.commonSt.states.clock(this.commonSt);
  }
  longClickMode() {
    this.commonSt.state = new this.commonSt.states.clock(this.commonSt);
  }
  clickH() {
    return;
  }
  clickM() {
    return;
  }
  tick() {
    this.commonSt.state = new this.commonSt.states.clock(this.commonSt);
    if (this.commonSt.min < 59) {
      this.commonSt.min += 1;
    } else {
      this.commonSt.min = 0;
      this.commonSt.h < 23 ? (this.commonSt.h += 1) : (this.commonSt.h = 0);
    }
  }
  getCurrentMode() {
    return "bell";
  }
}
