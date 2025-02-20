import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    //redirectTo: 'auth',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    //path: 'auth',
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  /* {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user-dashboard',
    canActivate: [NormalGuard],
    loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'nyn-b',
    component: FormTutorNynBComponent,
  }, */
  // {
  //   path: 'stepper-nyn-b',
  //   component: StepperTramitesPamComponent,
  // },
  { path: '**', redirectTo: 'error/404' },
  //{ path: '**', redirectTo: 'login' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}