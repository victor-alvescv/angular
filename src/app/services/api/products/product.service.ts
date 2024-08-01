import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) {}

  getAllProductsWithLimit(limit: number = 5) {
    const productsUrl: string = this.baseUrl + `products?limit=${limit}`;
    return this.http.get<any>(productsUrl);
  }
}

// put this in the chatGPT and check line per line 2:41:25
