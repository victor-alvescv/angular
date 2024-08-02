/* 

ANGULAR: Is a popular open-source framework for building web applications. It is created and maintained by Google, and it follows the component-based architecture;

more info: https://www.youtube.com/watch?v=VTEDh2pNSBQ

. At it's core, Angular leverages TypeScript;
. One of the key features of Angular is it's powerful and extensible templating system;
. Angular employs a component-based architectures where the application is built by composing reusable components;

CORE FEATURES OF ANGULAR:

. Two-way data binding -> Powerful feature that allows you to synchronize the data between your component class and your template;
. Dependency injection -> Design pattern used to manage and provide dependencies to different components or services in your application;
. Templating -> Process of defining the HTML structure and binding it with your component’s data and logic;
. Routing and navigation -> Allow you to define and manage navigation paths within your application;

WHY USE ANGULAR?:

. Productivity: Angular provides a rich set of features and tools;
. Large Ecosystem: Angular has a vast and active community;
. Scalability: Angular's component-based architectures promotes code reusability;
. Performance: Angular has built-in optimization techniques;
. CLI: Angular provides excellent tooling support through the Angular CLI;
. Cross-platform Development: You can build applications for web, mobile, and desktop;

ANGULAR VS OTHER FRAMEWORKS:

Angular: Angular is a comprehensive and opinionated framework;
React: React is a JavaScript library for building user interfaces;
Vue: Vue is a progressive JavaScript framework that is designed to be incrementally adoptable;

HOW TO SETUP:

1. Install the Angular CLI by typing "npm i @angular/cli" or "npm i -g @angular/cli" to install it globally;
2. Now with the new CLI(ng) we can check the version(ng version) or access the help page(ng --help);
3. Entering the help page we can see a lot of commands that the CLI knows, but the one we are going to use now is "ng new [name]" to create a new Angular workspace;
4. After typing that, we will get two questions:
- What type of stylesheet we would like to use? -> in this case we will be using CSS;
- Do you want to enable SSR(render HTML in the server-side) and SSG(generating HTML at build time)? -> we will say no;

Happy Hacking!!

Analyzing Root Files ->

. src folder -> Folder that contains all the resources for the application;
. editorconfig -> File that is used to maintain consistent coding styles across different editors;
. gitignore -> File is used to specify which files and directories Git should ignore in a project;
. angular.json -> It defines the workspace and project configuration for Angular CLI, specifying how your Angular application is built, tested, and served;
. tsconfig.app.json -> Defines how TypeScript should compile your Angular application code;
. tsconfig.json -> Central configuration file for TypeScript projects. It specifies how TypeScript should compile your code, including compiler options, file inclusions, and project references;
. tsconfig.spec.json -> TypeScript configuration file specifically for testing in Angular projects;

INSIDE THE APP FOLDER -> The .css, .html, .spec.ts and .ts are the four files that compose the AppComponent, the config and route are just additionals;

** To run the app you either type "ng serve" or "npm run start"

UNDERSTANDING COMPONENTS:

. Templates: The template defines the structure and appearance of the component's UI. It uses HTML along with Angular-specific syntax to bind data, handle events, and render dynamic content;
. Class: The class contains the component's logic and data. It is written in TS and includes properties, methods, and lifecycle hooks;
. Metadata: The metadata is defined using decorators. It provides Angular with information about the component, such as it's selector, template, styles, and dependencies;

CREATING AND USING COMPONENTS: Use the Angular CLI to generate a new component("ng generate component [component-name]");

COMPONENT COMMUNICATION (INPUT AND OUTPUT) 1:34:30

UNDERSTANDING SERVICES:

. In Angular, services are reusable and injectable classes that provide functionality and data to components throughout an application;

. Services are responsible for handling tasks such as data retrieval from API's, sharing data between components, and performing business logic;

. Services are typically used to abstract away the implementation details of specific functionality, keeping the components lean and focused on their primary responsibilities. They help...
promote code reusability, modularity, and testability;

CREATING AND USING SERVICES -> "ng generate service service-name" or "ng generate service services/service-name", to create a folder called services;

Dependency Injection: 
Modularity: Dependencies can be managed and resolved independently, allowing for easier code organization and separation of concerns;
Reusability: Services can be shared and reused across multiple components, reducing code duplication;
Testability: Dependencies can be easily mocked or replaced during testing, enabling effective unit testing;
Loose Coupling: Components and services depend on abstractions(interfaces) rather than concrete implementations, resulting in loosely coupled code that is easier to maintain and modify;

CONFIGURING ROUTES -> Angular's routing allows you to define and configure routes for different views or components in your app. Routing enables navigation between different pages or sections...
of your application without requiring a full page reload; (go to the app.routes.ts file)

ROUTER OUTLET, ROUTER LINKS, AND NAVIGATION -> 

. The router-outlet directive is a placeholder that renders the component associated with the active route. It acts as a viewport for the content...
of the routed components;

e.g. "<router-outlet />"

. To navigate between routes, Angular provides the routerLink directive, which allows you to create links to different routes in your application. Here's an example of using routerLink:

e.g. "<a routerLink="/about">About</a>" or "<a [routerLink]="['/user', userId]">User Profile</a> -> ['/user', userId] === /user/${userId}

. To navigate programmatically in the component class, you can use the Router service provided by Angular router;

STEP BY STEP OF HOW WE MADE THE ROUTE TO WORK ->

1. We created a new component called menu and edit the html and css, with two <li>'s with a link inside it, the Home Page(just display the my-first-comp component), and the About page...
link(should display the about component that we'll create); 
2. Going to the app.component.html we can make sure that we are only left with the router-outlet(so we can display what is related with the route in question), and all the components that...
we want to exist in any page, in this case we only want the app menu(navbar) to stay in any case;
3. Let's create the About Component now(new g c about), and add the css and html for it. Inside the app.routes.ts we can now create the routes for the home and the about page(check the file...
to see how's done), linking both to a specific component(don't forget to import it). Now the /home and the /about have a page, with the navbar and the component according to it displayed. But...
the menu is not working yet(go to menu.component.html);

HOW TO GET THE PARAM(PATH VARIABLE) OF THE ROUTE ->

1. Inside the about.component.html we created a h3 with a param variable, that we later declared inside the about.component.ts;
2. Now we want to get the path variable, to do that we create a new route inside app.routes.ts, and to make sure Angular understand that the username in about/username is a path variable, we...
add a ":" before it;
3. To get that variable/parameter, inside the about.component.ts create a constructor and inject a private service(activatedRoute) of type ActivatedRoute(a service provided by Angular's...
@angular/router package that provides information about the route associated with the component where it is injected);
4. Now in the component's class we are going to "implement" a interface called OnInit -> OnInit interface is used to define a lifecycle hook that is called after Angular has initialized all...
data-bound properties of a directive or component. It provides a way to execute custom initialization logic once the component's inputs are set and the component is fully initialized.
5. You need to import onInit from the @angular/core, declare it in the component's class, and implement it by creating a method called "ngOnInit" that will perform initialization logic after...
Angular has set the component’s input properties and the component is fully created;
6. More Info inside the about.component.ts;

NOW QUERY PARAMS ->

1. if we add this after the :username(it can be the word course for this) ?lastname=jv&course=angular -> so now the url is = http://localhost:4200/about/course?lastname=jv&course=angular;
2. In this case we are adding to the queryParams object inside the snapshot two keys(course: "angular", lastname: "jv"). Now we are going to display these;
3. Inside the about.component.ts we declare a new variable called queryParam and inside the ngOnInit we set that variable to the queryParam course value;
4. And like that, we can use the query param values in the html;

ANGULAR HTTPCLIENT -> 

1. After typing "ng g s services/api/products/Product" in the terminal we created inside the services folder a folder called api that has a folder called products with the product.services;
2. Inside the service check how it works!

*/
