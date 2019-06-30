import { Component, OnInit, Input } from '@angular/core';
import { SavedGame } from 'src/app/game/game.models';
import { StateService } from 'src/app/game/services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-game',
  templateUrl: './saved-game.component.html',
  styleUrls: ['./saved-game.component.css']
})
export class SavedGameComponent implements OnInit {
  @Input() savedGame: SavedGame;

  constructor(private stateService: StateService, private router: Router) {}

  ngOnInit() {}

  handleContinueClick() {
    this.router.navigate(['continue/' + this.savedGame.id]);
  }

  handleDeleteClick() {
    this.stateService.deleteGame(this.savedGame.id);
  }
}
