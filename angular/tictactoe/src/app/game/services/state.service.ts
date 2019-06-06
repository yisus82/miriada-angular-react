import { Injectable } from '@angular/core';
import { State } from '../game.models';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  state$: BehaviorSubject<State>;

  constructor() {
    const initialState = {
      turn: 'PLAYERX',
      values: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
      numberMovements: 0,
      winner: '',
      playerName: ''
    };

    this.state$ = new BehaviorSubject(initialState);
  }

  get state(): State {
    return this.state$.getValue();
  }

  set state(state: State) {
    this.state$.next(state);
  }

  updateValue(row: number, col: number) {
    if (this.state.values[row][col] === '-') {
      const newValue = this.state.turn === 'PLAYERX' ? 'X' : 'O';
      const newTurn = this.state.turn === 'PLAYERX' ? 'PLAYERO' : 'PLAYERX';
      this.state.values[row][col] = newValue;
      this.state.turn = newTurn;
      this.state.numberMovements++;
      this.state.winner = this.checkWinner();
      this.state$.next(this.state);
    }
  }

  reset() {
    if (this.state.numberMovements !== 0) {
      this.state = {
        turn: 'PLAYERX',
        values: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
        numberMovements: 0,
        winner: '',
        playerName: ''
      };
    }
  }

  checkWinner(): string {
    if (
      (this.state.values[0][0] === 'X' &&
        this.state.values[0][1] === 'X' &&
        this.state.values[0][2] === 'X') ||
      (this.state.values[1][0] === 'X' &&
        this.state.values[1][1] === 'X' &&
        this.state.values[1][2] === 'X') ||
      (this.state.values[2][0] === 'X' &&
        this.state.values[2][1] === 'X' &&
        this.state.values[2][2] === 'X') ||
      (this.state.values[0][0] === 'X' &&
        this.state.values[1][0] === 'X' &&
        this.state.values[2][0] === 'X') ||
      (this.state.values[0][1] === 'X' &&
        this.state.values[1][1] === 'X' &&
        this.state.values[2][1] === 'X') ||
      (this.state.values[0][2] === 'X' &&
        this.state.values[1][2] === 'X' &&
        this.state.values[2][2] === 'X') ||
      (this.state.values[0][0] === 'X' &&
        this.state.values[1][1] === 'X' &&
        this.state.values[2][2] === 'X') ||
      (this.state.values[0][2] === 'X' &&
        this.state.values[1][1] === 'X' &&
        this.state.values[2][0] === 'X')
    ) {
      return 'PLAYERX';
    } else if (
      (this.state.values[0][0] === 'O' &&
        this.state.values[0][1] === 'O' &&
        this.state.values[0][2] === 'O') ||
      (this.state.values[1][0] === 'O' &&
        this.state.values[1][1] === 'O' &&
        this.state.values[1][2] === 'O') ||
      (this.state.values[2][0] === 'O' &&
        this.state.values[2][1] === 'O' &&
        this.state.values[2][2] === 'O') ||
      (this.state.values[0][0] === 'O' &&
        this.state.values[1][0] === 'O' &&
        this.state.values[2][0] === 'O') ||
      (this.state.values[0][1] === 'O' &&
        this.state.values[1][1] === 'O' &&
        this.state.values[2][1] === 'O') ||
      (this.state.values[0][2] === 'O' &&
        this.state.values[1][2] === 'O' &&
        this.state.values[2][2] === 'O') ||
      (this.state.values[0][0] === 'O' &&
        this.state.values[1][1] === 'O' &&
        this.state.values[2][2] === 'O') ||
      (this.state.values[0][2] === 'O' &&
        this.state.values[1][1] === 'O' &&
        this.state.values[2][0] === 'O')
    ) {
      return 'PLAYERO';
    }
    if (this.state.numberMovements === 9) {
      return 'TIE';
    }
    return '';
  }
}
