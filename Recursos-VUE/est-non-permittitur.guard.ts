import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../stores/auth-store';
import { AutStatus } from '../interfaces';


const estNonPermittiturGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {

  const authStore = useAuthStore();

  await authStore.checkAuthStatus();

  authStore.authStatus === AutStatus.Authenticated ? next({ name: 'home' }) : next();
};

export default estNonPermittiturGuard;