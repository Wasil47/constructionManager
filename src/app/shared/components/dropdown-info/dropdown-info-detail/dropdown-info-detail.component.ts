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
  @Input() infoDetailImg: string = "http://www.r-tynk.pl/_include/img/profile/profile-02.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
