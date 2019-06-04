import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.css']
})
export class ChronometerComponent implements OnInit {
  minutes: number;
  seconds: number;
  decis: number;
  running: boolean;
  interval: NodeJS.Timer;

  constructor() {
    this.minutes = 0;
    this.seconds = 0;
    this.decis = 0;
    this.running = false;
  }

  ngOnInit() {}

  handleStartClick() {
    if (!this.running) {
      this.interval = setInterval(() => this.tick(), 100);
      this.running = true;
    }
  }

  handleStopClick() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }

  handleResetClick() {
    this.minutes = 0;
    this.seconds = 0;
    this.decis = 0;
  }

  tick() {
    let decis = this.decis + 1;
    let seconds = this.seconds;
    let minutes = this.minutes;

    if (decis === 10) {
      decis = 0;
      seconds = seconds + 1;
    }

    if (seconds === 60) {
      decis = 0;
      seconds = 0;
      minutes = minutes + 1;
    }

    this.decis = decis;
    this.seconds = seconds;
    this.minutes = minutes;
  }
}
