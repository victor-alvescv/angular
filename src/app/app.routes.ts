import { Routes } from '@angular/router'; // An array type that represents the route configuration for the Angular application.
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';

export const routes: Routes = [

    {
        path: "home",
        component: MyFirstCompComponent 
    },
    {
        path: "new-product",
        component: NewProductComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "about/:username",
        component: AboutComponent
    },
    {
        path: "products",
        component: ProductsComponent
    },
    
]; // Defines and exports an array of routes.

// Defines routing configuration for navigating between different views or components;