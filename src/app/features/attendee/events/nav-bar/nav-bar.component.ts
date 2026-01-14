import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { MatDialog } from '@angular/material/dialog';
import { EventDetailDialogComponent } from '../event-detail-dialog/event-detail-dialog.component';
import { ProfileComponent } from 'src/app/profile/profile.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
       constructor(private router: Router, private eventService : EventService, private dialog : MatDialog) {}
  showBookedEvents = false;
  searchTerm = '';
  searchResults: any[] = [];
  toggleBookedEvents() {
    this.showBookedEvents = !this.showBookedEvents;
  }
    goToBookedEvents(): void{
        this.router.navigate(['/attendee/booked-events']);
    }

    searchEvents() {
    if (this.searchTerm.trim()) {
      this.eventService.searchEventsByName(this.searchTerm).subscribe(
        (data) => {
          this.searchResults = data;
        },
        (error) => {
          console.error('Error fetching search results', error);
        }
      );
    } else {
      this.searchResults = [];
    }
  }

  
    openEventDetails(event: any) {
      this.dialog.open(EventDetailDialogComponent, {
        width: '600px',
        
        data: event
      });
    }
  

    clearSearch() {
    this.searchTerm = '';
    this.searchResults = [];
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }


  
  openProfile() {
    this.eventService.getProfileData(Number(localStorage.getItem('userId'))).subscribe({
      next: (data) => {
        console.log(data);
      this.dialog.open(ProfileComponent, {
        
      width: '400px',
      data: data
        
    });
  },
  error: (err) => {
    console.error('Error fetching profile data', err);
    alert('Failed to load profile data.');
  }

});
}
}
