import { RouterModule, Routes } from "@angular/router";
import { ProductosComponent } from "./productos/productos.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: 'home',
    component: ProductosComponent,
  },
  {
    path: '',
    component: ProductosComponent,
  },
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}