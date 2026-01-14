import { Component, Input } from '@angular/core';
import { EventDetailDialogComponent } from '../../event-detail-dialog/event-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EventData } from 'src/app/models/event.model';

@Component({
  selector: 'app-eventsbycategory',
  templateUrl: './eventsbycategory.component.html',
  styleUrls: ['./eventsbycategory.component.css']
})
export class EventsbycategoryComponent {

 constructor(private dialog: MatDialog) {}

 categories: string[] = [
    'Music',
    'Entertainment',
    'Technology',
    'Sports',
    'Arts & Culture',
    'Food & Drink',
    'Business & Networking',
    'Health & Wellness',
    'Charity & Causes',
    'Others'
  ];

  @Input() events: EventData[] = [];

  openCategory: string | null = null;

  

  toggleCategory(category: string) {
    this.openCategory = this.openCategory === category ? null : category;
  }

  viewDetails(event: any) {
    this.dialog.open(EventDetailDialogComponent, {
      width: '600px',
      data: event
    });
  }

}
