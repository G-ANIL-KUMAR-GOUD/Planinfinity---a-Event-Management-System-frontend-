import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { EventData } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailsComponent implements OnInit {
  event?: EventData;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    if (!eventId) {
      this.errorMessage = 'Invalid event ID.';
      return;
    }

    this.eventService.getEventById(eventId).subscribe({
      next: (data) => this.event = data,
      error: () => this.errorMessage = 'Failed to load event details.'
    });
  }
}
