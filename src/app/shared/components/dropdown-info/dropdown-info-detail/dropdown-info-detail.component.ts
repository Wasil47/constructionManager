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
  @Input() infoDetailImg: string = "https://ecommerce-react-nodejs.herokuapp.com/static/media/testProduct.4560de66.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
