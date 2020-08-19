import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  @Input() boolean: boolean;
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
