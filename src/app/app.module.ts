import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './features/auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { EventsModule } from './features/organizer/events/events.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';  
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventListModule } from './features/attendee/events/event-list/event-list.module';
import { OrganizerModule } from './features/organizer/organizer.module';
import { OrganizerRoutingModule } from './features/organizer/organizer-routing.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { EventDetailDialogComponent } from './features/attendee/events/event-detail-dialog/event-detail-dialog.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConfirmDialogComponent,
    EventDetailDialogComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    CommonModule,
    EventListModule,
    OrganizerModule,
    OrganizerRoutingModule,
    EventsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
