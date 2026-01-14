// src/app/features/organizer/organizer.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizerRoutingModule } from './organizer-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { EventsModule } from './events/events.module';
import { MaterialModule } from 'src/app/material/material.module';
const routes: Routes = []
//   {
//     path: 'organizer/',
//     component: DashboardComponent,
//     // children: [
//     //   { path: '', component: DashboardComponent },
//     //   { path: 'events', component: EventListComponent },
//     //   { path: 'events/create', component: CreateEventComponent }
//     // ]
//   }
// ];


@NgModule({
  declarations: [
    
    DashboardComponent,
    LayoutComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    EventsModule,
    MaterialModule
  ]
})
export class OrganizerModule {}
