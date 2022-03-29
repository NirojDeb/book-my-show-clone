import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.css']
})
export class MovieBookingComponent implements OnInit {

  tickets:number=0;
  selectedTiming='10.30';
  timings=['10.30','11.30']

  constructor(private movieService:MovieServiceService,private _router: Router) { }

  ngOnInit(): void {
    console.log(this.movieService.getSelectedDetails());
    if (!this.movieService.getSelectedDetails().movie)
    {
      this._router.navigate(['']);
    }
    
  }

  bookSeats(){
    this.movieService.setSelectedDetails({timing:this.selectedTiming});
    this.movieService.setNumberOfSeats(this.tickets);
    this._router.navigate(['seats'])
  }
}
