import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/models/product-representation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductDetailsComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: ProductRepresentation[] = [];

  constructor(private product: ProductService) {
        
  }

 ngOnInit(): void {
   this.product.getAllProductsWithLimit().subscribe({
    next: (data: ProductRepresentation[]) => {
      console.log(data)
      this.products = data
    }
   })
 }

}
