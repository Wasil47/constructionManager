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

  onBuildingChange(buildingSelect) {
    this.buildingIdSelected = buildingSelect.value;
    console.log('Building ID: ' + this.buildingIdSelected);
  }
  onFragmentChange(fragmentSelect) {
    this.fragmentIdSelected = fragmentSelect.value;
    console.log('Fragment ID: ' + this.fragmentIdSelected);
  }
  onStoreyChange(storeySelect) {
    this.storeyIdSelected = storeySelect.value;
    console.log('Storey ID: ' + this.storeyIdSelected);
  }

  //
  message: string;
  constructor(private building: BuildingService) {}


  ngOnInit(): void {

    this.building.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.building.changeMessage("Hello from Sibling")
    this.building.subject.subscribe(console.log)
    // console.log(this.building.subject)
  }

}
