// src/app/features/organizer/organizer-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsComponent } from './events/event-detail/event-detail.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { DeleteEventComponent } from './events/delete-event/delete-event.component';
import { EventsRoutingModule } from './events/events-routing.module';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RoleGuard } from 'src/app/guards/role.guard';

const routes: Routes = [
  {
    path: 'organizer', component: LayoutComponent, canActivate: [RoleGuard],
    data: { roles: ['ORGANIZER'] },
    children:[
      {
      path: 'dashboard', component: DashboardComponent, 
       },
      {
        path: 'events', component: EventListComponent
      },
      {
        path: 'events/create', component: CreateEventComponent
      },
      {
        path: 'events/edit/:id', component: EditEventComponent
      }

    ]
  }
    // children: [
    //   { path: '', component: LayoutComponent },
    //   { path: 'events', loadChildren: () => 
    //           import('./events/events.module').then(m => m.EventsModule) },
    //           { path: 'events/edit/:id', component: EditEventComponent },
    //           { path: 'events/delete/:id', component: DeleteEventComponent },
    //           { path: 'events/:id', component: EventDetailsComponent },

      // { path: 'events/create', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
      // { path: 'events/:id', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
      // You can add edit and delete here too later if needed
    ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizerRoutingModule {}

