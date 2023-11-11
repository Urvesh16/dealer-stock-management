import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

 
export const authGuard: CanActivateFn = (route, state) => {
  
    const router: Router = inject(Router);  
  const authService =  inject(AuthService);
  
  if (authService.isAuthenticatedUser()) {
    return true; 
  } else {
    router.navigate(['/login']);
    return false;
  }
};