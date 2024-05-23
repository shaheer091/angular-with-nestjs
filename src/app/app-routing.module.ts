import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { userGuard } from './guards/user.guard';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'signup',
    canActivate: [authGuard],
    component: SignupComponent,
  },
  { path: 'login', canActivate: [authGuard], component: LoginComponent },
  {
    path: 'user',
    canActivate: [userGuard],
    loadChildren: () =>
      import('./modules/user/user.module').then((user) => user.UserModule),
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((admin) => admin.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
