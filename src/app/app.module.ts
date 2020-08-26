import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProjectModule } from './modules/project/project.module';
import { BuildingService } from './modules/project/services/building.service';
import { UserService } from './modules/project/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectModule,
  ],
  providers: [BuildingService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
