import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const loginGuardGuard: CanActivateFn = (route, state) => {
  const login: AuthService = inject(AuthService);
  const router: Router = inject(Router)
  return login.isAuthenticated()? true: router.navigate(['/login']);
};
