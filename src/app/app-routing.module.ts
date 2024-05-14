import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './modules/user/user.component';
import { AuthGuardService } from './guards/auth.guard';

const routes: Routes = [
  { path: '', canActivate:[AuthGuardService], component: SignupComponent },
  { path: 'login',canActivate:[AuthGuardService], component: LoginComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((user) => user.UserModule),
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
