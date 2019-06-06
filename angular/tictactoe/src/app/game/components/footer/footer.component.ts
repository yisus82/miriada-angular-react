import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private stateService: StateService, private router: Router) {}

  ngOnInit() {}

  resetGame() {
    this.stateService.reset();
    this.router.navigate(['new']);
  }
}
