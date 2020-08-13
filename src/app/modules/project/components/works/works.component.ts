import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../../services/building.service';

import {
  exampleWorks,
  exampleWorkDetails,
} from '../../../../data/examples/exampleProject2';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  works: [
    {
      buildingId: number[];
      fragmentId: number[];
      storeyId: number[];
      categoryId: number[];
      workId: number;
      workName: string;
    }
  ] = exampleWorks;
  workDetails: [
    {
      buildingId: number;
      fragmentId: number;
      storeyId: number;
      workId: number;
      workDetailId: number;
      workDetailProgress: number;
      workDetailName: string;
      workDetailImages: [
        {
          imagesData: string;
          images: string[];
        }
      ];
    }
  ] = exampleWorkDetails;

  //examples (to delete)
  // infoName: string = 'Ścianki';
  // infoId: any = '1';
  // infoPercent: number = 40;

  // infoDetailName: string = 'Tynkarze';
  // infoDetailPercent: number = 80;

  // infoDetailData: any = '25-08-2020';
  // infoDetailImg: string =
  //   'http://www.r-tynk.pl/_include/img/profile/profile-02.jpg';

  constructor(private building: BuildingService) {}

  buildingIdSelected: number;
  fragmentIdSelected: number;
  storeyIdSelected: number;
  categoryIdSelected: number;

  editMode: boolean;

  checkProgress(workId) {
    let progress = 0;
    let newArr = this.workDetails.filter((e) => {
      return (
        workId === e.workId &&
        this.checkId(this.buildingIdSelected, e.buildingId) &&
        this.checkId(this.fragmentIdSelected, e.fragmentId) &&
        this.checkId(this.storeyIdSelected, e.storeyId)
      );
    });
    for (let detail of newArr) {
      progress += detail.workDetailProgress;
    }
    return progress / newArr.length;
  }

  checkValue(value, array) {
    if (value === null) {
      return true;
    }
    return array.some((e) => e == value);
  }
  checkId(selectedId, workId) {
    if (!selectedId) {
      return true;
    }
    return selectedId == workId;
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
    this.building.categoryIdSelected.subscribe(
      (id) => (this.categoryIdSelected = id)
    );
    this.building.editModeSelected.subscribe(
      (boolean) => (this.editMode = boolean)
    );
  }
}
