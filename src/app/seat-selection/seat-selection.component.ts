import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initializeThemeInCustomizations } from '@uifabric/styling/lib/styles/theme';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent implements OnInit {
  totalRows:number=0;
  totalColumns:number=0;
  seat:any=[];
  movieName="";
  cityName="";
  timing="";
  seatsToBeBooked=0;
  currentSelected:any=new Set()

  constructor(private movieService:MovieServiceService,private _router: Router) { }

  ngOnInit(): void {
    this.movieName=this.movieService.getMovieName();
    this.cityName=this.movieService.getCityName();
    this.timing=this.movieService.getTiming();

    if(this.movieName==undefined)
    {
      this._router.navigate(['']);
    }
    
    var totalSeats=this.movieService.getTotalSeats(this.movieName,this.cityName);
    this.totalRows=totalSeats/50;
    this.totalColumns=50;
    console.log(totalSeats);
    var bookedSeats=this.movieService.getBookedSeats(this.movieName,this.cityName,this.timing);
    var tempSeats=Array(this.totalRows).fill(Array(this.totalColumns));
    this.seatsToBeBooked=this.movieService.getNumberOfSeats();

    for (let row=0; row<this.totalRows; row++) {
        this.seat.push(new Array(this.totalColumns).fill(0));
    };
    var x=new Set(bookedSeats);
    for (let i = 0; i < tempSeats.length; i++) {
      for (let j = 0; j < tempSeats[i].length; j++) {
        if(x.has(`${i}|${j}`))
        {
          this.seat[i][j]=1;
        }
        else{
          this.seat[i][j]=0;
        }
        
      }
      
    }
    

  }

  unBookSeats(row:any,col:any)
  {
    if(this.currentSelected.has(`${row}|${col}`))
    {
      this.currentSelected.delete(`${row}|${col}`);
      this.seatsToBeBooked+=1;
      this.seat[row][col]=0;
    }
  }

  bookEmptySeats(row:any,col:any,seats:number,increment:number):any
  {
    if(seats==0 || this.seatsToBeBooked==0)
      return true;
    if(col<0 || col>=50)
      return false;
    if(this.seat[row][col]==1)
      return false;
    if(this.seat[row][col]==0)
      this.seat[row][col]=1;
      this.currentSelected.add(`${row}|${col}`);
      this.seatsToBeBooked-=1;
      return this.bookEmptySeats(row,col+increment,seats-1,increment);
  }

  bookSeat(row:any,col:any)
  {
   if(this.seat[row][col]==0)
      this.bookEmptySeats(row,col,this.seatsToBeBooked,1);
    else
      this.unBookSeats(row,col);
  
  
    
  }

  presentlyBooked(i:any,j:any)
  {
    return this.currentSelected.has(`${i}|${j}`)
  }

  bookSelectedSeats()
  {
    var selectedSeats=[...this.currentSelected];
    this.movieService.bookSeat(this.movieName,this.cityName,this.timing,selectedSeats);
    this._router.navigate(['']);
  }

}
