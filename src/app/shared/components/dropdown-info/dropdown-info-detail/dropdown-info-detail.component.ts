import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-info-detail',
  templateUrl: './dropdown-info-detail.component.html',
  styleUrls: ['./dropdown-info-detail.component.css']
})
export class DropdownInfoDetailComponent implements OnInit {
  @Input() infoDetailName: string = "Tynkarze";
  @Input() infoDetailPercent: number = 80;
  
  @Input() infoDetailData: any = "25-08-2020";
  @Input() infoDetailImg: string = "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4";

  constructor() { }

  ngOnInit(): void {
  }

}
