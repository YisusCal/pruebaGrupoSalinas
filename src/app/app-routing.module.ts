import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";

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
   {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}