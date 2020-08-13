import { Component, OnInit } from '@angular/core';

import { exampleCategory } from '../../../../data/examples/exampleProject2';
import { BuildingService } from '../../services/building.service';

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

  constructor(private building: BuildingService) {}

  onCategoryChange(categorySelect) {
    this.categoryIdSelected = categorySelect;
    console.log('Category ID: ' + this.categoryIdSelected);
    this.building.changeCategory(categorySelect);
  }

  ngOnInit(): void {}
}
