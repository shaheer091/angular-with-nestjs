import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { SeePostsComponent } from './components/see-posts/see-posts.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { SeeUsersComponent } from './components/see-users/see-users.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddPostComponent,
    SeePostsComponent,
    NavBarComponent,
    AdminHomePageComponent,
    SeeUsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
