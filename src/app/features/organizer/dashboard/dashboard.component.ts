import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    organizer : any;
    constructor(private eventServ: EventService) {}
    ngOnInit() {
      this.eventServ.getProfileData(Number(localStorage.getItem('userId'))).subscribe({
      next: (response) => {
        console.log('Organizer events fetched successfully:', response);
        this.organizer = response;
      },
      error: (err) => {
                  console.error('Error fetching organizer events:', err);
      }
    });

  }
}
