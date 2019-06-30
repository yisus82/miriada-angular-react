import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  numberMovements: number;
  gameName: string;
  message: string;

  constructor(private stateService: StateService, private router: Router) {}

  ngOnInit() {
    this.stateService.state$.subscribe(state => (this.numberMovements = state.numberMovements));
  }

  resetGame() {
    this.stateService.reset();
    this.router.navigate(['new']);
  }

  handleSubmitClick() {
    if (this.gameName) {
      this.stateService.saveGame(this.gameName);
      this.message = 'Game saved succesfully!';
      this.gameName = '';
    } else {
      this.message = '';
    }
  }
}
