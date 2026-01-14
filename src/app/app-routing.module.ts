 
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './features/organizer/events/event-list/event-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },



  // { path: 'events', component: LoginComponent, canActivate: [AuthGuard] },
  // { path: 'attendee/events', loadChildren: () =>
  //      import('./features/attendee/events/event-list/event-list.module').then(m => m.AttendeeEventListModule) },

];


// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   {
//     path: 'events',
//     canActivate: [AuthGuard],
//     loadChildren: () =>
//       import('./features/events/events.module').then((m) => m.EventsModule),
//   },
//   {
//   path: 'organizer',
//   loadChildren: () =>
//     import('./features/organizer/organizer.module').then(m => m.OrganizerModule)
// },

//   {
//     path: 'organizer-panel',
//     canActivate: [RoleGuard],
//     data: { roles: ['ORGANIZER'] },
//     loadChildren: () =>
//       import('./features/organizer/organizer.module').then((m) => m.OrganizerModule),
//   },
//   { path: '**', redirectTo: 'login' },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

