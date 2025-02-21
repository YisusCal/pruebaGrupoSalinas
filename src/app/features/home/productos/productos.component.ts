import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  pizzas: any[] = [];
  constructor(private menuService: MenuService){}
  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas(): void {
    this.menuService.getMenu().subscribe(response => {
      console.log(response);
      console.log(response.status);
      if (response.status === 'success') {
        this.pizzas = response.data; 
      }
    });
  }


}
