import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeEventListComponent } from 'src/app/features/attendee/events/event-list/attendee-event-list.component';
describe('AttendeeEventListComponent', () => {
  let component: AttendeeEventListComponent;
  let fixture: ComponentFixture<AttendeeEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendeeEventListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeeEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
