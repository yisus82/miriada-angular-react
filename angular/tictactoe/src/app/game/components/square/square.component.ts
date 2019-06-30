import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() row: number;
  @Input() column: number;
  stateService: StateService;

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }

  ngOnInit() {}

  handleClick() {
    if (this.stateService.checkWinner() === '') {
      this.stateService.updateValue(this.row, this.column);
    }
  }
}
