import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownInfoDetailComponent } from './dropdown-info-detail.component';

describe('DropdownInfoDetailComponent', () => {
  let component: DropdownInfoDetailComponent;
  let fixture: ComponentFixture<DropdownInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
