import { Component, OnInit } from '@angular/core';
import { exampleProject } from '../../../../data/examples/exampleProject';
import {
  exampleBuildings,
  exampleFragments,
  exampleStoreys,
} from '../../../../data/examples/exampleProject2';

import { BuildingService } from '../../services/building.service';

@Component({
  selector: 'app-building-selection',
  templateUrl: './building-selection.component.html',
  styleUrls: ['./building-selection.component.scss'],
})
export class BuildingSelectionComponent implements OnInit {
  // define IDs
  buildingIdSelected: number;
  fragmentIdSelected: number;
  storeyIdSelected: number;

  // define Arrays
  // buildingsList: string[] = [];
  // fragmentsList: string[] = [];
  // storeysList: string[] = [];

  buildings: {
    buildingId: number;
    buildingName: string;
  } = exampleBuildings;
  fragments: {
    buildingId: number;
    fragmentId: number;
    fragmentName: string;
  } = exampleFragments;
  storeys: {
    fragmentId: number;
    storeyId: number;
    storeyName: string;
  } = exampleStoreys;

  selectBuilding = 'Obiekt';
  selectFragment = 'Część';
  selectStorey = 'Kondygnacja';

  //
  message: string;
  constructor(private building: BuildingService) {}

  onBuildingChange(buildingSelect) {
    this.buildingIdSelected = buildingSelect;
    console.log('Building ID: ' + this.buildingIdSelected);
    //
    this.building.changeBuilding(buildingSelect);
    // this.building.buildingIdSelected.subscribe(id => this.testId = id)
    this.onFragmentChange(null);
  }
  onFragmentChange(fragmentSelect) {
    this.fragmentIdSelected = fragmentSelect;
    console.log('Fragment ID: ' + this.fragmentIdSelected);
    this.building.changeFragment(fragmentSelect);
    this.onStoreyChange(null);
  }
  onStoreyChange(storeySelect) {
    this.storeyIdSelected = storeySelect;
    console.log('Storey ID: ' + this.storeyIdSelected);
    this.building.changeStorey(storeySelect);
  }

  ngOnInit(): void {}
}
