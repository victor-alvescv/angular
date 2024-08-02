import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { CommonModule } from '@angular/common';
import { ProductRepresentation } from '../services/models/product-representation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private product: ProductService
  ) {}

  param: any;
  queryParam: any;
  queryLastName: any;
  productToSend: ProductRepresentation = {
    title: 'My product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
  };

  ngOnInit(): void {
    // POST REQUEST
    this.product.createProduct(this.productToSend).subscribe({
      next: (response: ProductRepresentation): void => {
        console.log(response);
      },
      error: (err): void => {
        console.log('An error ocurred:', err);
      },
    });

    // GET REQUEST
    this.product.getAllProductsWithLimit().subscribe({
      next: (data): void => {
        console.log('Products', data);
      },
      error: (err): void => {
        console.log('An error ocurred:', err);
      },
      complete: (): void => {
        console.log('Observable is completed.');
      },
    });

    // PARAM INFO
    this.param = this.activatedRoute.snapshot.params['username'];
    /*
     snapshot: provides a static snapshot of the route information; 
     params: An object that holds the route parameters of the current route;
     ['username']: Key used to access a specific route parameter from the params object. In this case, it is accessing the parameter named "username", the same name we gave the path variable...
    in the app.route.ts; 
    */
    this.queryParam = this.activatedRoute.snapshot.queryParams['course'];
    this.queryLastName = this.activatedRoute.snapshot.queryParams['lastname'];
  }
}

/* 

HttpClient(read) -> 

1. Each component can only have one constructor, so we add the product one beside the route one, calling it product;
2. Inside the ngOnInit() we tag the product method getAllProductsWithLimit(that is returning the observable) and subscribe it -> subscribe() is a method used to listen for values emitted by...
the observable;
3. The observable takes an object with "next", "error" and "complete" callbacks! The next callback is used to handle the values emitted by the observable, it's called each time the observable...
emits a new value. The error one handles errors that occur during the observable's execution, and it's called if the observable encounters an error or exception during its operation. The...
complete one handles the completion of the observable's emission. Is called when the observable has finished emitting all its values and wil not emit any more;
4. For us to get access to the data in the best way, we need to create a representation interface(TypeScript) for the get request in the product.service.ts, by specifing the type of the data;
5. Without specifying a type, TypeScript treats the data as any, which can lead to a lack of type safety and potential runtime errors. By specifying a type, you ensure that TypeScript...
performs type checking, helping to catch errors early and making the code more maintainable and robust. The data gives back to us an array([]) filled with:

{id?: number,
title?: string,
description?: string,
category?: string,
image?: string,
price?: number,
rating?: {rate?: number, count?: number}}, so to make sure that's the type, we create a file called product-representation.ts inside a folder called models inside the services folder, and there...
we are exporting a interface(way to define an object structure), with the structure above, and then we import that name(ProductRepresentation) inside the product.service.ts and we put it at,
the type for the get request with an array([]) symbol - saying that here we will get an array filled with ProductRepresentation objects;
6. With that we can have access to the data in a proper way to use it in the html;

(create) ->

1. Taking a look at the API we are using we find the instructions of how to post a product. Inside the about.component.ts we create a new variable called "productToSend" that's an object...
with the type of the ProductRepresentation, what may seem a problem is that the object in this case does not have the same structure as the interface, but in the interface they are all...
optional, so it will only consider the keys that we need, we took off the id(the api creates a new one automatically in the post request), and the rating. Now inside the product.service.ts...
we create a new method called createProduct, that takes an argument called product with the same type as the about component variable, and is with that argument that we will pass the...
productToSend. We create the variable that holds the Url and return in the method the http service making the post request(that also takes the type of ProductRepresentation), use the url as...
the first argument and the parameter(product) as the second one.
2. Inside the about.component.ts file in the ngOnInit method, we tag the createProduct method that's inside the product service and pass the object we want to send as an argument, and with...
the next callback we console.log the response, that also uses the type of ProductRepresentation;

ps: We are putting those types just as a safety measure, using the TS magic, the only part that is actually a must is the product parameter inside the method in the product.service.ts

*/
