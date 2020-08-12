import { Injectable } from '@angular/core';
import {
  exampleBuildings,
  exampleFragments,
  exampleStoreys,
} from '../../../data/examples/exampleProject2';
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

  // buildingIdSelected: number;
  // fragmentIdSelected: number;
  // storeyIdSelected: number;
  // categoryIdSelected: number;

  // buildings: {
  //   buildingId: number;
  //   buildingName: string;
  // } = exampleBuildings;
  // fragments: {
  //   buildingId: number;
  //   fragmentId: number;
  //   fragmentName: string;
  // } = exampleFragments;
  // storeys: {
  //   fragmentId: number;
  //   storeyId: number;
  //   storeyName: string;
  // } = exampleStoreys;

  // onBuildingChange(buildingSelect) {
  //   this.buildingIdSelected = buildingSelect.value;
  //   console.log('Building ID: ' + this.buildingIdSelected);
  // }
  // onFragmentChange(fragmentSelect) {
  //   this.fragmentIdSelected = fragmentSelect.value;
  //   console.log('Fragment ID: ' + this.fragmentIdSelected);
  // }
  // onStoreyChange(storeySelect) {
  //   this.storeyIdSelected = storeySelect.value;
  //   console.log('Storey ID: ' + this.storeyIdSelected);
  // }
}
