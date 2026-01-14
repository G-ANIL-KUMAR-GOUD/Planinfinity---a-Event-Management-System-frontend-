import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { EventData } from 'src/app/models/event.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EventDetailDialogComponent } from '../event-detail-dialog/event-detail-dialog.component';
import { WhyattendeventsComponent } from './whyattendevents/whyattendevents.component';
@Component({
  selector: 'app-attendee-event-list',
  templateUrl: './attendee-event-list.component.html',
  styleUrls: ['./attendee-event-list.component.css']
})
export class AttendeeEventListComponent implements OnInit {
  events: EventData[] = [];
  errorMessage = '';
  loading = true;
  error = '';

  constructor(private eventService: EventService, private router: Router, private dialog: MatDialog) {
    console.log(localStorage.getItem('role'));
    console.log(localStorage.getItem('userId'));
    console.log(localStorage.getItem('token'));
  }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe({
      next: (data) => {
        console.log('fetch'+data);

        this.events = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load events.';
        this.loading = false;
      },
    });
  }
  register(eventId: number): void {
  this.eventService.registerForEvent(eventId).subscribe({
    next: () => alert('Registered successfully!'),
    error: () => alert('Registration failed.'),
  });
}

openEventDetails(event: any) {
  this.dialog.open(EventDetailDialogComponent, {
    width: '600px',
    
    data: event
  });
}

viewDetails(eventId: number): void {
  this.router.navigate(['/attendee/events', eventId]); // assuming detail route
}





}