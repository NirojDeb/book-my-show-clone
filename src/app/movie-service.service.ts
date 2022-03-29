import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  selectedDetails:any={}
  numberOfSeats=0;
  
  movies=[
    {
      Id:1,
      Title:'Spiderman No Way Home',
      cities:
      [
        {
        cityName:'Kolkata',
        totalSeats:250,
        timings:[
          {
            id:1,
            time:'10.30',
            bookedSeats:[]
          },
          {
            id:2,
            time:'5.30',
            bookedSeats:[]
          }
        ]
        },
        {
          cityName:'Silchar',
          totalSeats:150,
          timings:[
            {
              id:1,
              time:'10.30',
              bookedSeats:[]
            },
            {
              id:2,
              time:'5.30',
              bookedSeats:[]
            }
          ]
        },
        {
          cityName:'Kochi',
          totalSeats:200,
          timings:[
            {
              id:1,
              time:'10.30',
              bookedSeats:[]
            },
            {
              id:2,
              time:'5.30',
              bookedSeats:[]
            }
          ]
        }
      ]
    },
    {
      Id:2,
      Title:'Venom',
      cities:
      [
        {
        cityName:'Ranchi',
        totalSeats:200,
        timings:[
          {
            id:1,
            time:'10.30',
            bookedSeats:[]
          },
          {
            id:2,
            time:'5.30',
            bookedSeats:[]
          }
        ]
        },
        {
          cityName:'Silchar',
          totalSeats:250,
          timings:[
            {
              id:1,
              time:'10.30',
              bookedSeats:[]
            },
            {
              id:2,
              time:'7.30',
              bookedSeats:[]
            }
          ]
        },
        {
          cityName:'Kochi',
          totalSeats:250,
          timings:[
            {
              id:1,
              time:'10.30',
              bookedSeats:[]
            },
            {
              id:2,
              time:'5.30',
              bookedSeats:[]
            }
          ]
        }
      ]
    }
  ]
  constructor() { }

  

  getMovieName()
  {
    return this.selectedDetails['movie'];
  }

  getCityName()
  {
    return this.selectedDetails['city'];
  }

  getTiming()
  {
    return this.selectedDetails['timing'];
  }

  setSelectedDetails(details:any){
    this.selectedDetails={
      ...this.selectedDetails,
      ...details
    }
  }

  getSelectedDetails(){
    return this.selectedDetails;
  }

  setNumberOfSeats(numberOfSeats:number)
  {
    this.numberOfSeats=numberOfSeats;
  }

  getNumberOfSeats()
  {
    return this.numberOfSeats
  }

  getAllCities()
  {
    var cities=new Set()
    this.movies.map((movie)=>{
      movie.cities.map((city)=>{
        cities.add(city.cityName);
      })
    })

    return Array.from(cities);
  }

  getMoviesByCity(cityName:string)
  {
    
    return this.movies.filter((movie)=>{
      return movie.cities.filter((city)=>{return city.cityName==cityName}).length;
    })
  }

  getTimingbyMovieAndCity(movieName:string,cityName:string){
    var timing;
     this.movies.map((movie)=>{
      if(movie.Title==movieName)
      {
       movie.cities.map((city)=>{
          if(city.cityName==cityName)
          {
            timing=city.timings;
          }
          
        })
      }
    })
    return timing;

  }

  getTotalSeats(movieName:string,cityName:string){
    var totalSeats=0;
    this.movies.map((movie)=>{
        if(movie.Title==movieName)
        {
          movie.cities.map((city)=>{
            if(city.cityName==cityName)
            {
              totalSeats=city.totalSeats
            }
          })
        }
    })
    return totalSeats;
  }


  getBookedSeats(movieName:string,cityName:string,timing:string):any{
    var bookedSeats:any=[]
    this.movies.map((movie)=>{
      if(movie.Title==movieName)
      {
        movie.cities.map((city)=>{
          if(city.cityName==cityName)
          {
            city.timings.map((movieTiming)=>{
              if(movieTiming.time==timing)
              {
                bookedSeats=movieTiming.bookedSeats;
              }
            })
          }
        })
      }
    })
  return bookedSeats;
  }

  bookSeat(movieName:string,cityName:string,timing:string,presentSelection:any)
  {   
    this.movies.map((movie)=>{
      if(movie.Title==movieName)
      {
        movie.cities.map((city)=>{
          if(city.cityName==cityName)
          {
            city.timings.map((movieTiming:any)=>{
              if(movieTiming.time==timing)
              {
                movieTiming.bookedSeats=[...movieTiming.bookedSeats,...presentSelection];
              }
            })
          }
        })
      }
    })
  
  }

  
}
