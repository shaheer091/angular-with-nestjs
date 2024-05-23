import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const commonServ = inject(CommonService);
  const router = inject(Router);

  if (commonServ.isLoggedIn() && !commonServ.isAdmin) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
