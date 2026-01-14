import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  eventForm: FormGroup;
  selectedFile: File | null = null;
  errorMessage: string = '';

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
  
  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router
  ) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      venue: ['', Validators.required],
      description: ['', Validators.required],
      dateTime: ['', Validators.required],
      organizerId: [localStorage.getItem('userId'), Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
    });
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    if (this.eventForm.invalid) return;

    const formValues = this.eventForm.value;
    const formData = new FormData();

    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        formData.append(key, formValues[key]);
      }
    }

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.eventService.createEvent(formData).subscribe({
      next: () => this.router.navigate(['/organizer/events']),
      error: () => this.errorMessage = 'Failed to create event.'
    });
  }
}
