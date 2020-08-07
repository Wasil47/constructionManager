import { Injectable } from '@angular/core';
import {
  exampleBuildings,
  exampleFragments,
  exampleStoreys,
} from '../../../data/examples/exampleProject2';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BuildingService {
  
  public subject = new BehaviorSubject(123);

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();


  private buildingId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  buildingIdSelected = this.buildingId.asObservable();

  constructor() { }

  changeBuilding(selectedId: number) {
    this.buildingId.next(selectedId);
    console.log('Building ID: ' + this.buildingIdSelected);
  }


  changeMessage(message: string) {
    this.messageSource.next(message)
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
