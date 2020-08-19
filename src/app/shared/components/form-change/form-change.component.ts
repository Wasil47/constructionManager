import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-change',
  templateUrl: './form-change.component.html',
  styleUrls: ['./form-change.component.css'],
})
export class FormChangeComponent implements OnInit {
  @Input() boolean: boolean;
  @Input() selectedId: number;
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
