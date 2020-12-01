import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.sass']
})
export class StopwatchComponent {
  isStopwatchRun = false;
  interval;
  time = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

  timer(): void {
    this.interval = setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);
    }, 1000);
  }

  startTimer(): void {
    if (!this.isStopwatchRun) {
      this.isStopwatchRun = true;
      this.timer();
    } else {
      this.isStopwatchRun = false;
      this.stopTimer();
      this.time = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
    }
  }

  stopTimer(): void {
    clearInterval(this.interval);
  }

  resetTimer(): void {
    this.time = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
    this.stopTimer();
    this.timer();
  }

  waitTimer(): void {
    this.isStopwatchRun = false;
    if (!this.isStopwatchRun) {
      this.stopTimer();
    }
  }
}
