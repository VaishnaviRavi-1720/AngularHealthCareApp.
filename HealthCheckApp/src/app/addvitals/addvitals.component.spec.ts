import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvitalsComponent } from './addvitals.component';

describe('AddvitalsComponent', () => {
  let component: AddvitalsComponent;
  let fixture: ComponentFixture<AddvitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvitalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddvitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
