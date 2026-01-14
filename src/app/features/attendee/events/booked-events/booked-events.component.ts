import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { EventDetailDialogComponent } from '../event-detail-dialog/event-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-booked-events',
  templateUrl: './booked-events.component.html',
  styleUrls: ['./booked-events.component.css']
})
export class BookedEventsComponent {
  eventService: EventService;
  events : any[] = []; 
  constructor(router: Router, eventService: EventService,
    private dialog: MatDialog, 
    private snackBar : MatSnackBar) {
    this.eventService = eventService;
     }
  ngOnInit() {
    this.getRegisteredEvents();

  }
  getRegisteredEvents() {
    const userId = localStorage.getItem('userId');
   
    if (!userId) {
      console.error('User ID not found in local storage');
      return [];
    }

    return this.eventService.getRegisteredEvents(+userId).subscribe({
      next: (events: any) => {
        console.log('Registered events:', events);
        this.events = events;
        return events;
      },
      error: (err) => {
        console.error('Error fetching registered events:', err);
        return [];
      }
    });
  }

  viewEvent(event : any){
    this.dialog.open(EventDetailDialogComponent, {
          width: '600px',
          data: event
        });

  }

  // deleteBookedEvent(eventId: number) {
  //   console.log('Deleting booked event with ID:', eventId);
  //   this.eventService.deleteBookedEvent(eventId).subscribe({
  //     next: (response) => {
  //       console.log('Event unregistered successfully:', response);
  //       this.getRegisteredEvents(); // Refresh the list after deletion
  //     },
  //     error: (error) => {
  //       console.error('Error unregistering event:', error);
  //     }
  //   });
  // }
  deleteBookedEvent(eventId: number) {

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Think Again!',
        message: 'Are you sure you don\'t want to attend this event?'
      }
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result) {
       
          this.eventService.deleteBookedEvent(eventId).subscribe({
            next : () => {
              this.snackBar.open('Registration cancelled Successfully', 'Close', {duration : 3000});
              this.getRegisteredEvents();
            },
            error: (error) => {
             console.error('Error unregistering event:', error);
             }
          })
        
      }
    });


  }

}
