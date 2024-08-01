import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  param: any;
  queryParam: any;
  queryLastName: any;


  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.param = this.activatedRoute.snapshot.params['username'];
    /*
     snapshot: provides a static snapshot of the route information; 
     params: An object that holds the route parameters of the current route;
     ['username']: Key used to access a specific route parameter from the params object. In this case, it is accessing the parameter named "username", the same name we gave the path variable...
    in the app.route.ts; 
    */
   this.queryParam = this.activatedRoute.snapshot.queryParams['course'];
   this.queryLastName = this.activatedRoute.snapshot.queryParams['lastname']
  }
}
