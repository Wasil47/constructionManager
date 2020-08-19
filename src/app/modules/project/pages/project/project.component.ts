import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  editMode: boolean;
  constructor(private userService: UserService) {}
  onSubmitEdit(boolean) {
    this.editMode = boolean;
    this.userService.changeEditMode(boolean);
  }

  ngOnInit(): void {
    this.userService.editModeSelected.subscribe(
      (boolean) => (this.editMode = boolean)
    );
  }
}
