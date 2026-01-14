import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: any[] = [];
  errorMessage: string = '';
  organizer_id = localStorage.getItem('userId');

  constructor(private eventService: EventService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventService.getOrganizerEvents(Number(this.organizer_id)).subscribe({
    
      next: (data) =>{ this.events = data;
        console.log('Fetched events:', this.events);
      },
      error: (err) => this.errorMessage = 'Failed to load events.'
    });
  }

  deleteEvent(eventId: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this event?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eventService.deleteEvent(eventId).subscribe({
          next: () => {
            this.snackBar.open('Event deleted successfully!', 'Close', { duration: 3000 });
            this.fetchEvents(); 
          },
          error: () => {
            this.snackBar.open('Failed to delete event.', 'Close', { duration: 3000 });
          }
        });
      }
    });
  }

  // deleteEvent(id: number): void {
  //   this.eventService.deleteEvent(id).subscribe({
  //     next: () => this.fetchEvents(),
  //     error: () => this.errorMessage = 'Failed to delete event.'
  //   });
  // }

  editEvent(event: any): void {
    console.log('Editing event with ID:');
    this.router.navigate(['/organizer/events/edit', event.id], { state: { event }});
  }

}
