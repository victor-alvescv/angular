import { HttpClient } from '@angular/common/http';
// "service" from Angular's @angular/common/http package. HttpClient is used to make HTTP requests to a server;
import { Injectable } from '@angular/core';
import { ProductRepresentation } from '../../models/product-representation';
// This line imports the Injectable decorator from Angular's @angular/core package. Injectable is used to define a service that can be injected into other components or services.

// REMEMBER THAT FOR THE HTTPCLIENT TO WORK WE NEED THE FUNCTION provideHttpClient() INSIDE THE PROVIDERS ARRAY IN APP.CONFIG.TS. IT ALLOWS YOU TO CONFIG AND PROVIDE THE HTTPCLIENT SERVICE;

@Injectable({
  providedIn: 'root',
})
export class ProductService { // This line declares and exports the ProductService class, making it available to other parts of the application;
  private baseUrl: string = 'https://fakestoreapi.com/'; // this line declares a variable called baseUrl that is equal to the base url for the fake api we are using;
  constructor(private http: HttpClient) {} 
  /* This is the constructor for the ProductService class. It injects the HttpClient instance into the service, allowing it to make HTTP requests. HttpClient is provided as a private member...
  so it can be used within the class. */

  getAllProductsWithLimit(limit: number = 5) { 
    // getAllProductsWithLimit: This defines a public method getAllProductsWithLimit that takes an optional parameter limit (default value is 5);
    const productsUrl: string = this.baseUrl + `products?limit=${limit}`; 
    // This line constructs the full URL for the API request by appending the endpoint products?limit=${limit} to the baseUrl. The ${limit} is coming from the method parameter(default = 5);
    return this.http.get<ProductRepresentation[]>(productsUrl); 
    // This sends a HTTP GET request to the constructed productsUrl and returns the "observable" from the HttpClient. The observable can be subscribed to in other parts of the app to get data;
    // WHAT IS AN OBSERVABLE -> Is a way to handle asynchronous operations and event-based programs;

    // Go to the about.component.ts file;
  }

  createProduct(product: ProductRepresentation) {
    const productsUrl: string = this.baseUrl + "products"
    return this.http.post(productsUrl, product);
  }

}
