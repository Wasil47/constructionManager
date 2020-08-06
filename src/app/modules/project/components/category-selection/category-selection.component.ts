import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.scss'],
})
export class CategorySelectionComponent implements OnInit {
  selectCategory = 'Kategoria';
  categories = ['Budownictwo', 'Elektryka', 'Sanitarka', 'Wszystkie'];
  selectRoom = 'Pomieszczenie';
  rooms = ['Wszystkie'];

  constructor() {}

  ngOnInit(): void {}
}
