// src/app/features/attendee/events/event-list/event-list.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AttendeeEventListComponent } from './attendee-event-list.component';
import { RoleGuard } from 'src/app/guards/role.guard';
import { MaterialModule } from 'src/app/material/material.module';
import { NavBarComponent } from 'src/app/features/attendee/events/nav-bar/nav-bar.component';
import { BookedEventsComponent } from '../booked-events/booked-events.component';
import { WhyattendeventsComponent } from './whyattendevents/whyattendevents.component';
import { EventsbycategoryComponent } from './eventsbycategory/eventsbycategory.component';
import { MatChipsModule } from '@angular/material/chips';
import { CategoryFilterPipe } from 'src/app/pipes/category-filter.pipe';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'attendee', component: AttendeeEventListComponent, canActivate: [RoleGuard], data: { roles: ['ATTENDEE'] },
    // children:[
    //   {
    //     path : 'booked-events',  component: BookedEventsComponent, canActivate: [RoleGuard], data: { roles: ['ATTENDEE']}
    //   },
    // ]
  }
  // { path: 'attendee-event-list', component: AttendeeEventListComponent, canActivate: [RoleGuard], data: { roles: ['ATTENDEE']}  },
  // {path : 'booked-events',  component:BookedEventsComponent, canActivate: [RoleGuard], data: { roles: ['ATTENDEE']}  },

];

@NgModule({
  declarations: [
    AttendeeEventListComponent, 
    NavBarComponent,
    WhyattendeventsComponent,
    BookedEventsComponent,
    EventsbycategoryComponent,
    CategoryFilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    RouterModule.forChild(routes) // Enables routing to this component if lazily loaded
  ],
  exports: [
    AttendeeEventListComponent,
    NavBarComponent,
    
  ]
})
export class EventListModule { }
