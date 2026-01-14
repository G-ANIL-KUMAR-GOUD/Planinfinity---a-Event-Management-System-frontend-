import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  editForm!: FormGroup;
  eventId!: number;
  imagePreview: string | ArrayBuffer | null = null;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private eventService: EventService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));

    const eventData = history.state?.event;

    if (eventData) {
      this.imagePreview = eventData.image;
      this.initForm(eventData);
    }
    

    //  else {
    //   // Step 3: Fallback to backend
    //   this.eventService.getEventById(this.eventId).subscribe(data => {
    //     this.initForm(data);
    //   });
    // }
  }

  initForm(event: any) {
    

    this.editForm = this.fb.group({
      name: [event.name, Validators.required],
      venue: [event.venue, Validators.required],
      description: [event.description, Validators.required],
      organizerId: [event.organizer.id],
      capacity: [event.capacity, Validators.required],
      price: [event.price, Validators.required],
      category: [event.category, Validators.required],
      dateTime: [event.dateTime, Validators.required],
      image: [null] 
    });
  }

    onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.editForm.patchValue({ image: file });
      this.editForm.get('image')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
       if (this.editForm.valid) {
      const formData = new FormData();
      formData.append('id', this.eventId.toString());
      Object.keys(this.editForm.controls).forEach(key => {
        if (key === 'image' && this.editForm.get(key)?.value) {
          formData.append(key, this.editForm.get(key)?.value);
        } else {
          formData.append(key, this.editForm.get(key)?.value);
        }
        
      });

         this.eventService.updateEvent(this.eventId, formData).subscribe(() => {
        this.snackBar.open('Event updated successfully!', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success']});
      });
      this.router.navigate(['/organizer/events']);
  }
  else {
    this.snackBar.open('Please fill all required fields.', 'Close', {
      duration: 3000,
      panelClass: ['snackbar-error']
    });
  }
}
}
