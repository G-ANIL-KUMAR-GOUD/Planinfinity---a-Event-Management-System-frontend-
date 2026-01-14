import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsbycategoryComponent } from './eventsbycategory.component';

describe('EventsbycategoryComponent', () => {
  let component: EventsbycategoryComponent;
  let fixture: ComponentFixture<EventsbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsbycategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
