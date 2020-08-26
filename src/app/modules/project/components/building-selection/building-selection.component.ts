import { Component, OnInit } from '@angular/core';
import {
  exampleBuildings,
  exampleFragments,
  exampleStoreys,
} from '../../../../data/examples/exampleProject2';

import { BuildingService } from '../../services/building.service';
import { UserService } from '../../services/user.service';

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

  editMode: boolean;

  // define Arrays
  // buildingsList: string[] = [];
  // fragmentsList: string[] = [];
  // storeysList: string[] = [];

  buildings: [
    {
      buildingId: number;
      buildingName: string;
    }
  ] = exampleBuildings;
  fragments: [
    {
      buildingId: number;
      fragmentId: number;
      fragmentName: string;
    }
  ] = exampleFragments;
  storeys: [
    {
      fragmentId: number;
      storeyId: number;
      storeyName: string;
    }
  ] = exampleStoreys;

  selectBuilding = 'Obiekt';
  selectFragment = 'Część';
  selectStorey = 'Kondygnacja';

  constructor(
    private building: BuildingService,
    private userService: UserService
  ) {}

  onBuildingChange(buildingSelect) {
    this.buildingIdSelected = buildingSelect;
    this.building.changeBuilding(buildingSelect);
    this.onFragmentChange(null);
  }
  onFragmentChange(fragmentSelect) {
    this.fragmentIdSelected = fragmentSelect;
    this.building.changeFragment(fragmentSelect);
    this.onStoreyChange(null);
  }
  onStoreyChange(storeySelect) {
    this.storeyIdSelected = storeySelect;
    this.building.changeStorey(storeySelect);
  }

  //
  receiveTestMessage($event) {
    console.log($event);
    this.buildings.push({
      buildingId: 10,
      buildingName: $event,
    })
  }
  //

  ngOnInit(): void {
    this.userService.editModeSelected.subscribe(
      (boolean) => (this.editMode = boolean)
    );
    this.building.buildingIdSelected.subscribe(
      (id) => (this.buildingIdSelected = id)
    );
  }
}
