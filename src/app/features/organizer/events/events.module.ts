// src/app/features/organizer/events/events.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailsComponent } from 'src/app/features/organizer/events/event-detail/event-detail.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EventsRoutingModule } from './events-routing.module';
import { EditEventComponent } from './edit-event/edit-event.component';
import { OrganizerComponent } from './features/organizer/organizer.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    EventListComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EditEventComponent,
    OrganizerComponent,
    DeleteEventComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    EventsRoutingModule,
    FormsModule,
    MaterialModule,
    MatDialogModule,
    MatButtonModule,
    MatOptionModule,
  ],
  exports: [
    EventListComponent,
    CreateEventComponent,
    EventDetailsComponent
  ]
})
export class EventsModule {}
