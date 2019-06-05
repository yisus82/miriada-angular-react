import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  values: string[][];

  constructor(stateService: StateService) {
    this.values = stateService.state.values;
  }

  ngOnInit() {}
}
