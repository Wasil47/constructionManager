import { Component, OnInit } from '@angular/core';

import { exampleCategory } from '../../../../data/examples/exampleProject2';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.scss'],
})
export class CategorySelectionComponent implements OnInit {
  categoryIdSelected: number;

  categories: {
    categoryId: number;
    categoryName: string;
  } = exampleCategory;

  selectCategory = 'Kategoria';

  // selectRoom = 'Pomieszczenie';
  // rooms = ['Wszystkie'];

  onCategoryChange(categorySelect) {
    this.categoryIdSelected = categorySelect.value;
    console.log('Object ID: ' + this.categoryIdSelected);
  }
 

  constructor() {}

  ngOnInit(): void {}
}
