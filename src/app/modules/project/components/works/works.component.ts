import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../../services/building.service';

import {
  exampleWorks,
  exampleWorkDetails,
  exampleWorkProgress,
} from '../../../../data/examples/exampleProject2';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  works: {
    buildingId: number[];
    fragmentId: number[];
    storeyId: number[];
    categoryId: number[];
    workId: number;
    workName: string;
  } = exampleWorks;
  workDetails: {
    workId: number;
    workDetailId: number;
    workDetailProgress: number,
    workDetailName: string;
  } = exampleWorkDetails;
  workProgress: {
    buildingId: number;
    fragmentId: number;
    storeyId: number;
    workDetailId: number;
    workProgressId: number;
    // workProgress: number;
    workDetailImages: [
      {
        imagesData: string;
        images: string[];
      }
    ];
  } = exampleWorkProgress;

  infoName: string = 'Ścianki';
  infoId: any = '1';
  infoPercent: number = 40;
  //
  infoDetailName: string = 'Tynkarze';
  infoDetailPercent: number = 80;

  infoDetailData: any = '25-08-2020';
  infoDetailImg: string =
    'http://www.r-tynk.pl/_include/img/profile/profile-02.jpg';
  //

  test() {
    console.log('test');
    console.log();
  }

  constructor(private building: BuildingService) {}

  buildingIdSelected: number;
  fragmentIdSelected: number;
  storeyIdSelected: number;

  checkValue(value, array) {
    return array.some((e) => e == value);
  }

  ngOnInit(): void {
    this.building.buildingIdSelected.subscribe(
      (id) => (this.buildingIdSelected = id)
    );
    this.building.fragmentIdSelected.subscribe(
      (id) => (this.fragmentIdSelected = id)
    );
    this.building.storeyIdSelected.subscribe(
      (id) => (this.storeyIdSelected = id)
    );
  }
}
