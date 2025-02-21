import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { ProductosComponent } from "./productos/productos.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ProductosComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule {}