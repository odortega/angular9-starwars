import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Starship } from '../interfaces/starship';


@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
  starship: Starship = {
    model: '',
    name: '',
    passengers: ''
  };

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.apiService.getStarShip(params.id).subscribe((data) => {
        console.log(data);
        this.starship.name = data['name'];
        this.starship.model = data['model'];
        this.starship.passengers = data['passengers'];
      });
    });
  }
}
