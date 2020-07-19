import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent implements OnInit {
  @Input() selectName: string;
  @Input() objects: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
