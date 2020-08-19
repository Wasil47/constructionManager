import { BehaviorSubject } from 'rxjs';

export class UserService {
  private editMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  editModeSelected = this.editMode.asObservable();

  changeEditMode(boolean: boolean) {
    this.editMode.next(boolean);
    console.log('Edit mode: ' + this.editMode.value);
  }
}
