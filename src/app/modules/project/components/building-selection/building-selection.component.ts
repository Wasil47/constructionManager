import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-selection',
  templateUrl: './building-selection.component.html',
  styleUrls: ['./building-selection.component.scss'],
})
export class BuildingSelectionComponent implements OnInit {
  selectObiekt = 'Obiekt';
  objects = ['Blok nr.1 ', 'Blok nr.2', 'Blok nr.3'];
  selectFragment = 'Część';
  fragments = ['Klatka A', 'Klatka C', 'Klatka C'];
  selectStorey = 'Kondygnacja';
  storeys = ['-2', '-1', 'parter', '1'];
  // objects = "test"

  constructor() {}

  ngOnInit(): void {}
}
