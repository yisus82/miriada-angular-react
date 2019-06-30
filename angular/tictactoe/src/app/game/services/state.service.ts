import { Injectable } from '@angular/core';
import { State, SavedGame } from '../game.models';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  state$: BehaviorSubject<State>;

  constructor(private httpService: HttpService) {
    const initialState = {
      turn: 'PLAYERX',
      values: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
      numberMovements: 0,
      winner: '',
      playerName: '',
      lastSavedGameUrl: '',
      savedGames: []
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
        playerName: '',
        lastSavedGameUrl: this.state.lastSavedGameUrl,
        savedGames: this.state.savedGames
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

  saveGame(gameName: string) {
    const gameInfo = {
      turn: this.state.turn,
      values: this.state.values,
      numberMovements: this.state.numberMovements,
      winner: this.state.winner,
      playerName: this.state.playerName
    };
    this.httpService.saveGame(gameInfo).subscribe(response => {
      const savedGame = {
        id: Date.now(),
        name: gameName,
        url: response.uri
      };
      this.state.savedGames.push(savedGame);
      this.state.lastSavedGameUrl = response.uri;
    });
  }

  continueGame(id: number) {
    const savedGame = this.state.savedGames.find(game => game.id === id);
    if (savedGame) {
      return this.httpService.getSavedGame(savedGame.url);
    } else {
      return null;
    }
  }

  deleteGame(id: number) {
    const savedGame = this.state.savedGames.find(game => game.id === id);
    if (savedGame) {
      if (savedGame.url === this.state.lastSavedGameUrl) {
        const index = this.state.savedGames.indexOf(savedGame);
        if (index > 0) {
          this.state.lastSavedGameUrl = this.state.savedGames[index - 1].url;
        } else {
          this.state.lastSavedGameUrl = '';
        }
      }
      const filteredGames = this.state.savedGames.filter(game => game.id !== id);
      this.state.savedGames = [...filteredGames];
    }
  }
}
