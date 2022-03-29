import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { HomeComponent } from './home/home.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieBookingComponent,
    HomeComponent,
    SeatSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
