import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalOutletComponent } from './personal-outlet.component';

describe('PersonalOutletComponent', () => {
  let component: PersonalOutletComponent;
  let fixture: ComponentFixture<PersonalOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
