// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { Routes } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ChargingSpotListComponent } from './charging-spot/charging-spot-list/charging-spot-list.component';
import { ChargingSpotRegisterComponent } from './charging-spot/charging-spot-register/charging-spot-register.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/spots', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'spots', component: ChargingSpotListComponent },
  { path: 'register-spot', component: ChargingSpotRegisterComponent },
];
