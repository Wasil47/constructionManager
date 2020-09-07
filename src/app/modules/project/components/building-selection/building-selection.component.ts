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
  getRandomId() {
    return Math.floor(Math.random() * 1000 + 100);
  }

  onBuildingAdd($event) {
    let randomId = this.getRandomId();
    console.log($event);
    console.log('Id:', randomId);
    this.buildings.push({
      buildingId: randomId,
      buildingName: $event,
    });
  }
  onFragmentAdd($event) {
    let randomId = this.getRandomId();
    console.log($event);
    console.log('Id:', randomId);
    this.fragments.push({
      buildingId: this.buildingIdSelected,
      fragmentId: randomId,
      fragmentName: $event,
    });
  }
  onStoreyAdd($event) {
    let randomId = this.getRandomId();
    console.log($event);
    console.log('Id:', randomId);
    this.storeys.push({
      fragmentId: this.fragmentIdSelected,
      storeyId: randomId,
      storeyName: $event,
    });
  }

  onBuildingNameChange($event) {
    console.log('New name:', $event);
    let id = this.buildings.findIndex(
      (object) => object.buildingId == this.buildingIdSelected
    );
    console.log('Id:', id);
    this.buildings[id].buildingName = $event;
  }
  onFragmentNameChange($event) {
    console.log('New name:', $event);
    let id = this.fragments.findIndex(
      (object) => object.fragmentId == this.fragmentIdSelected
    );
    console.log('Id:', id);
    this.fragments[id].fragmentName = $event;
  }
  onStoreyNameChange($event) {
    console.log('New name:', $event);
    let id = this.storeys.findIndex(
      (object) => object.storeyId == this.storeyIdSelected
    );
    console.log('Id:', id);
    this.storeys[id].storeyName = $event;
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
