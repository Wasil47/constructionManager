import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-change',
  templateUrl: './form-change.component.html',
  styleUrls: ['./form-change.component.css'],
})
export class FormChangeComponent implements OnInit {
  @Input() boolean: boolean;
  @Input() selectedId: number;
  @Input() name: string;
  @Output() event = new EventEmitter<string>();

  componentName: string;
  initialValue: null;

  constructor() {}

  onSubmit(form: NgForm) {
    this.componentName = "add" + this.name;
    console.log('Changed!');
    this.event.emit(form.value[this.componentName]);
    this.initialValue = null;
  }

  ngOnInit(): void {}
}
