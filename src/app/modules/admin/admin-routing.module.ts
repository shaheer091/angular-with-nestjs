import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { SeePostsComponent } from './components/see-posts/see-posts.component';

const routes: Routes = [
  { path: '', component: AddPostComponent },
  { path: 'seeAll', component: SeePostsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
