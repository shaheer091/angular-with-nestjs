import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { SeePostsComponent } from './components/see-posts/see-posts.component';
import { AdminComponent } from './admin.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'home', component: AdminHomePageComponent },
      { path: 'seePost', component: SeePostsComponent },
      { path: 'addPost', component: AddPostComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
