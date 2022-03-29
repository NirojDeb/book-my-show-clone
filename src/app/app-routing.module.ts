import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
const routes: Routes = [
  {
    path: 'home',
    redirectTo:''
  },
  {
    path: '',
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'booking',
    component:MovieBookingComponent,
  },
  {
    path:'seats',
    component:SeatSelectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
