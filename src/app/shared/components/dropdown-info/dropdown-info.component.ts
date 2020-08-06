import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-info',
  templateUrl: './dropdown-info.component.html',
  styleUrls: ['./dropdown-info.component.css'],
})
export class DropdownInfoComponent implements OnInit {

  @Input() infoName: string = 'Ścianki';
  @Input() infoId: any = '1';
  @Input() infoPercent: number = 40;

  constructor() {}

  ngOnInit(): void {}
}
