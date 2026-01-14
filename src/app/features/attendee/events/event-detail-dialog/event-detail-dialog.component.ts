import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from 'src/app/services/event.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-event-detail-dialog',
  templateUrl: './event-detail-dialog.component.html',
  styleUrls: ['./event-detail-dialog.component.css']
})
export class EventDetailDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<EventDetailDialogComponent>,
              private eventService: EventService,
              private snackBar: MatSnackBar) {
              }

  bookEvent() {
    this.eventService.registerForEvent(this.data.id).subscribe({
      next: (response: any) => {
        console.log('Event booked successfully:', response);
        this.showMessage(response.message || 'Event booked successfully!', 'success');
      },
      error: (error) => {
        console.error('Error booking event:', error);
        const errMsg = typeof error.error === 'string'
                      ? error.error
                      : error.error?.message || 'Something went wrong!';
        this.showMessage(errMsg, 'error');
      }
    });
    this.dialogRef.close();
  }

  private showMessage(message: string, type: 'success' | 'error') {
  this.snackBar.open(message, 'OK', {
    duration: 3000,
    panelClass: type === 'success' ? 'snack-success' : 'snack-error',
  });
}


}
