import { Component, OnInit } from '@angular/core';
import { exampleProject } from '../../../../data/examples/exampleProject';

@Component({
  selector: 'app-building-selection',
  templateUrl: './building-selection.component.html',
  styleUrls: ['./building-selection.component.scss'],
})
export class BuildingSelectionComponent implements OnInit {

  selectObiekt = 'Obiekt';
  // objects = ['Blok nr.1 ', 'Blok nr.2', 'Blok nr.3'];
  objectsList = [];

  objects = exampleProject.buildings;

  selectFragment = 'Część';
  fragments = ['Klatka A', 'Klatka B', 'Klatka C'];
  selectStorey = 'Kondygnacja';
  storeys = ['-2', '-1', 'parter', '1'];
  // objects = "test"

  constructor() {}

  ngOnInit(): void {
    for (let object of this.objects) {
      this.objectsList.push(object.buildingName)
    }
  }
}
