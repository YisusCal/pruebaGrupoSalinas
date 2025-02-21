import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient,) { }
  
  public getMenu() {
    return this.httpClient.get<ApiResponse>(`https://react-fast-pizza-api.onrender.com/api/menu`);
  }
}
