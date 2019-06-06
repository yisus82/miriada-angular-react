import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { BehaviorSubject } from 'rxjs';
import { State } from '../../game.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  state$: BehaviorSubject<State>;

  constructor(stateService: StateService) {
    this.state$ = stateService.state$;
  }

  ngOnInit() {}
}
