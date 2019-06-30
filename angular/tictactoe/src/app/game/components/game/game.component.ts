import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { HttpService } from 'src/app/services/http.service';
import { State } from '../../game.models';
import { Observable } from 'rxjs';
import { GameInfo } from 'src/app/app.models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  status: string;
  stateService: StateService;
  playerName: string;

  constructor(
    route: ActivatedRoute,
    stateService: StateService,
    httpService: HttpService,
    router: Router
  ) {
    this.status = 'fetching';
    this.stateService = stateService;
    this.playerName = '';
    const lastSavedGameUrl = stateService.state.lastSavedGameUrl;
    const savedGames = stateService.state.savedGames;
    if (route.snapshot.data.continue) {
      let gameObservable: Observable<GameInfo>;
      if (route.snapshot.params.id) {
        const id = Number(route.snapshot.params.id);
        gameObservable = this.stateService.continueGame(id);
        if (!gameObservable) {
          router.navigate(['continue']);
          return;
        }
      } else {
        gameObservable = httpService.getSavedGame(this.stateService.state.lastSavedGameUrl || '');
      }
      gameObservable.subscribe(
        (state: State) => {
          stateService.state = {
            ...state,
            lastSavedGameUrl,
            savedGames
          };
          this.status = 'success';
        },
        error => {
          this.status = error.statusText;
        }
      );
    } else {
      stateService.reset();
      this.status = 'success';
    }
  }

  ngOnInit() {}

  handleSubmitClick() {
    this.stateService.state.playerName = this.playerName;
  }
}
