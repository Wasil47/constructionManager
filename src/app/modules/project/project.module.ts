import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingSelectionComponent } from './components/building-selection/building-selection.component';
import { CategorySelectionComponent } from './components/category-selection/category-selection.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PreviewComponent } from './components/preview/preview.component';
import { WorksComponent } from './components/works/works.component';
import { ProjectComponent } from './pages/project/project.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BuildingSelectionComponent,
    CategorySelectionComponent,
    GalleryComponent,
    PreviewComponent,
    WorksComponent,
    ProjectComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [ProjectComponent],
})
export class ProjectModule {}
