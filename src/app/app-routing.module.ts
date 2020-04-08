import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeComponent } from './episode/episode.component';
import { StarshipComponent} from './starship/starship.component';

const routes: Routes = [
  {path: 'episode', component: EpisodeComponent },
  {path: 'starship/:id', component: StarshipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
