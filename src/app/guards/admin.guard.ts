import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CommonService } from '../services/common.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const commonServ = inject(CommonService);
  const isLoggedIn = commonServ.isLoggedIn();
  const decodedToken = commonServ.parseJwt();
  if (isLoggedIn && decodedToken.isAdmin) {
    return true;
  } else {
    inject(Router).navigate(['/user']);
    return false;
  }
};
