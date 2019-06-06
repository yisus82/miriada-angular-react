import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../../services/state.service';
import { HttpService } from 'src/app/services/http.service';
import { State } from '../../game.models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  status: string;
  stateService: StateService;
  playerName: string;

  constructor(route: ActivatedRoute, stateService: StateService, httpService: HttpService) {
    this.status = 'fetching';
    this.stateService = stateService;
    this.playerName = '';
    if (route.snapshot.data.continue) {
      httpService.getSavedGame().subscribe(
        (state: State) => {
          stateService.state = state;
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
