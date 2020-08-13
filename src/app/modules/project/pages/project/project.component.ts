import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../../services/building.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  editMode: boolean;
  constructor(private building: BuildingService) {}
  onSubmitEdit(boolean) {
    this.editMode = boolean;
    this.building.changeEditMode(boolean);
  }

  ngOnInit(): void {
    this.building.editModeSelected.subscribe(
      (boolean) => (this.editMode = boolean)
    );
  }
}
