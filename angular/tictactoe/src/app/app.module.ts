import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { IndexComponent } from './components/index/index.component';
import { GameComponent } from './game/components/game/game.component';
import { SavedGamesComponent } from './components/saved-games/saved-games.component';
import { SavedGameComponent } from './components/saved-game/saved-game.component';

const appRoutes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'new',
    component: GameComponent
  },
  {
    path: 'continue',
    component: GameComponent,
    data: { continue: true }
  },
  {
    path: 'continue/:id',
    component: GameComponent,
    data: { continue: true }
  },
  {
    path: 'games',
    component: SavedGamesComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent, IndexComponent, SavedGamesComponent, SavedGameComponent],
  imports: [BrowserModule, GameModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
