import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GameComponent } from './components/game/game.component';
import { HeaderComponent } from './components/header/header.component';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';
import { StateService } from './services/state.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [GameComponent, HeaderComponent, BoardComponent, SquareComponent, FooterComponent],
  imports: [CommonModule, FormsModule],
  providers: [StateService],
  exports: [GameComponent]
})
export class GameModule {}
