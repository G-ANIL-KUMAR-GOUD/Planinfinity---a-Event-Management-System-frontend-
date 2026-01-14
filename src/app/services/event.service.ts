// src/app/services/event.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventData } from '../models/event.model'; // Assuming you have an Event model defined  


@Injectable({
  providedIn: 'root',
})
export class EventService {
  private baseUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) {}

  

  // GET /api/events
  getAllEvents(): Observable<EventData[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',

    });
    return this.http.get<EventData[]>(`${this.baseUrl}`, {headers});
  }

  // DELETE /api/events/{id}

  getOrganizerEvents(organizerId: number): Observable<EventData[]> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const params = new HttpParams().set('organizerid', organizerId);
    console.log(`Fetching events for organizer ID: ${organizerId}`);
    return this.http.get<EventData[]>('http://localhost:8080/api/organizer/events', {headers, params });
  }
 

  createEvent(event: FormData): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 
      Authorization: `Bearer ${token}`,
    });
  return this.http.post(`${this.baseUrl}`, event);
}

getEventById(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/events/${id}`);
}


//for organizerrr
updateEvent(id: number, updatedData: any): Observable<any> {
  console.log(`Currently in service ,Updating event with ID: ${id} ` + updatedData );
   const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 
      Authorization: `Bearer ${token}`,
    });
  return this.http.put('http://localhost:8080/api/events/edit', updatedData, {headers});
}

deleteEvent(id: number): Observable<any> {
  const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 
      Authorization: `Bearer ${token}`,
    });
  return this.http.delete(`${this.baseUrl}/delete/${id}`, { headers });
}


// src/app/services/event.service.ts

registerForEvent(eventId: number): Observable<any> {
  const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 
      Authorization: `Bearer ${token}`,
    });
    console.log('registering event')
  return this.http.post(`http://localhost:8080/api/registrations/${eventId}/register`, { headers});
}

//registered events for attendee
getRegisteredEvents(attendeeId: number): Observable<EventData[]> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({ 
    Authorization: `Bearer ${token}`,
  });
  const params = new HttpParams().set('attendeeid', attendeeId.toString());
  return this.http.get<EventData[]>(`http://localhost:8080/api/registrations/events/${attendeeId}`, { headers });

  }

  //events by category
  getEventsByCategory(category: string): Observable<EventData[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<EventData[]>(`${this.baseUrl}/category/${category}`, { headers});
  }

  deleteBookedEvent(eventId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const headers = new HttpHeaders({ 
      Authorization: `Bearer ${token}`,
      
    });
    return this.http.delete(`http://localhost:8080/api/registrations/${eventId}/unregister`, { headers , params: new HttpParams().set('userId', userId || '') });
  }

  searchEventsByName(name: string): Observable<EventData[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 
      Authorization: `Bearer ${token}`,
    });
    const params = new HttpParams().set('name', name);
    return this.http.get<EventData[]>(`${this.baseUrl}/search`, { headers, params });
  }

  getProfileData(userId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 
      Authorization: `Bearer ${token}`,
      
    });
    
    if(localStorage.getItem('role') === 'ATTENDEE') {
     return this.http.get(`http://localhost:8080/api/attendees/profile/${userId}`, { headers  });
    }
    else 
    { 
        return this.http.get(`http://localhost:8080/api/organizer/profile/${userId}`, { headers });
    }
  }
}