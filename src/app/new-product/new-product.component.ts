import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductRepresentation } from '../services/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css',
})
export class NewProductComponent {
  product: ProductRepresentation = {};

  constructor(private service: ProductService, private router: Router) {}

  saveProduct() {
    this.service.createProduct(this.product).subscribe({
      next: (data: ProductRepresentation) => {
        console.log(data);
      },
    });
    this.router.navigate(['about', this.product.title]);
  }
}
