import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [UserComponent, NavbarComponent, HomepageComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
