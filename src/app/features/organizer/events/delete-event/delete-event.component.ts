import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {
  eventId!: number;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
  }

  confirmDelete(): void {
    this.eventService.deleteEvent(this.eventId).subscribe({
      next: () => this.router.navigate(['/organizer/events']),
      error: () => this.errorMessage = 'Failed to delete event.'
    });
  }

  cancel(): void {
    this.router.navigate(['/organizer/events']);
  }
}
