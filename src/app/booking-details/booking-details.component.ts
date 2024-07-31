import { Component } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.css'
})
export class BookingDetailsComponent {
  navToBack(){
    this.location.back();
  }
  navToHelp(){
    this.router.navigate(['help'])
  }
  constructor(private bookingService:BookingsService,
              private location:Location,
              private router:Router
  )
  {
    this.bookingService.getSelectedJob()
    console.log( this.bookingService.getSelectedJob());
   
  }

  noJobs:any=[
    {
     jobs:[{
              name:'Facial and skin care',
              count:'1',
              amount:'799'
            },
            {
              name:'Hand & Foot care',
              count:'1',
              amount:'699'
            },
          ],
     others:'69',
     total:'1574',
     credit:'7',
    }
  ]

}