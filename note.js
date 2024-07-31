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

CREATING AND USING COMPONENTS: Use the Angular CLI to generate a new component("ng generate component [component-name]")

*/