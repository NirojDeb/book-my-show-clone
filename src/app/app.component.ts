import { Component } from '@angular/core';
import { MovieServiceService } from './movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities:any=[];
  movies:any=[];
  selectedCity:string="Silchar";
  selectedMovie:string="";
 
  constructor(private movieServiceService:MovieServiceService)
  {
  }

  book(){
    this.movieServiceService.setSelectedDetails({movie:this.selectedMovie,city:this.selectedCity});
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
