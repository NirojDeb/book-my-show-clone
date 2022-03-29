import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities:any=[];
  movies:any=[];
  selectedCity:string="Silchar";
  selectedMovie:string="";
 
  constructor(private movieServiceService:MovieServiceService,private _router: Router)
  {
  }

  book(){
    this.movieServiceService.setSelectedDetails({movie:this.selectedMovie,city:this.selectedCity});
    this._router.navigate(['booking']);
  }

  called()
  {
    var movies=this.movieServiceService.getMoviesByCity(this.selectedCity);
    this.movies=movies;
    
  }
  title = 'book-my-show-clone';
  ngOnInit(){
    var cities=this.movieServiceService.getAllCities();
    this.cities=cities;
    console.log(this.cities);

    var movies=this.movieServiceService.getMoviesByCity(this.selectedCity);
    this.movies=movies;
    
    
  }

}
