import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingSelectionComponent } from './building-selection.component';

describe('BuildingSelectionComponent', () => {
  let component: BuildingSelectionComponent;
  let fixture: ComponentFixture<BuildingSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
