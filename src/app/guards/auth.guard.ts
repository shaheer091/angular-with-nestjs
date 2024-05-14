import { Injectable } from '@angular/core';
import { CommonService } from '../services/common.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private commonServ: CommonService) {}
  canActivate(): boolean {
    if (this.commonServ.isLoggedIn()) {
      return false;
    } else {
      return true;
    }
  }
}
