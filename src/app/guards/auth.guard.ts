import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const commonServ = inject(CommonService);
  const router = inject(Router);

  if (commonServ.isLoggedIn()) {
    const decodedToken = commonServ.parseJwt();
    if (decodedToken.isAdmin) {
      router.navigate(['/admin/home']);
    } else {
      router.navigate(['/user/home']);
    }
    return false;
  } else {
    return true;
  }
};
