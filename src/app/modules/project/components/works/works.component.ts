import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {

 

  infoName: string = 'Ścianki';
  infoId: any = '1';
  infoPercent: number = 40;

  test() {
    console.log("test")
    console.log()
  }

  constructor() {}

  ngOnInit(): void {}
}
