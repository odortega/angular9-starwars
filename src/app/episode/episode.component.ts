import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Episode } from '../interfaces/episode';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  public episode: Episode = {
    title: '',
    opening_crawl: '',
    starships: []

  };
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEpisode().subscribe((data) => {
      console.log(data);
      this.episode.title = data['title'];
      this.episode.opening_crawl = data['opening_crawl'];
      this.episode.starships = data['starships'];
    });
  }

  goStarShip(url:string){
    
  }

}
