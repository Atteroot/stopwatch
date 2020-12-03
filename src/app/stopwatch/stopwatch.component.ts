import { Component } from '@angular/core';
import { timer } from 'rxjs';


@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.sass']
})
export class StopwatchComponent {
  isStopwatchRun = false;
  interval;
  subscribes;
  time = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

  timer(): void {
    this.interval = timer(0, 1000);
    this.subscribes = this.interval.subscribe(second => {
      this.time.setUTCSeconds(second);
      if (second === 60) {
        this.subscribes.unsubscribe();
        this.timer();
      }
      console.log(second);
    });
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
    this.subscribes.unsubscribe();
  }

  resetTimer(): void {
    this.time = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
    this.stopTimer();
    this.timer();
  }

  waitTimer(): void {
    this.isStopwatchRun = false;
    if (!this.isStopwatchRun) {
      this.subscribes.unsubscribe();
    }
  }
}
