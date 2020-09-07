import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css'],
})
export class FormAddComponent implements OnInit {
  @Input() boolean: boolean;
  @Input() name: string;
  @Output() event = new EventEmitter<string>();

  componentName: string;
  initialValue: null;

  constructor() {}

  onSubmit(form: NgForm) {
    this.componentName = "add" + this.name;
    console.log('Submitted!');
    this.event.emit(form.value[this.componentName]);
    this.initialValue = null;
  }

  ngOnInit(): void {}
}
