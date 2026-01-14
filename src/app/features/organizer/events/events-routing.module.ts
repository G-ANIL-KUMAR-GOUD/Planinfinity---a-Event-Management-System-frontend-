import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailsComponent } from './event-detail/event-detail.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'list', pathMatch: 'full' }, // Default to list
//   { path: 'list', component: EventListComponent },
//   { path: 'create', component: CreateEventComponent },
//   { path: ':id', component: EventDetailsComponent } // View details for event by ID
// ];

@NgModule({
  imports: [],
  // imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}
