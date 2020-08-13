import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BuildingService {
  private buildingId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  buildingIdSelected = this.buildingId.asObservable();
  private fragmentId: BehaviorSubject<number> = new BehaviorSubject<number>(
    null
  );
  fragmentIdSelected = this.fragmentId.asObservable();
  private storeyId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  storeyIdSelected = this.storeyId.asObservable();
  private categoryId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  categoryIdSelected = this.categoryId.asObservable();

  private editMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  editModeSelected = this.editMode.asObservable();

  constructor() {}

  changeBuilding(selectedId: number) {
    this.buildingId.next(selectedId);
    console.log('Building ID: ' + this.buildingId.value);
  }
  changeFragment(selectedId: number) {
    this.fragmentId.next(selectedId);
    console.log('Fragment ID: ' + this.fragmentId.value);
  }
  changeStorey(selectedId: number) {
    this.storeyId.next(selectedId);
    console.log('Storey ID: ' + this.storeyId.value);
  }
  changeCategory(selectedId: number) {
    this.categoryId.next(selectedId);
    console.log('Category ID: ' + this.categoryId.value);
  }
  changeEditMode(boolean: boolean) {
    this.editMode.next(boolean);
    console.log('Edit mode: ' + this.editMode.value);
  }
}
