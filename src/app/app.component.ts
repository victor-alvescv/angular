import { Component } from '@angular/core'; // Imports the Component decorator from Angular's core module, which is used to define an Angular component;
import { RouterOutlet } from '@angular/router';
import { MyFirstCompComponent } from "./my-first-comp/my-first-comp.component";
import { MenuComponent } from "./menu/menu.component"; // Is used in the template(html) to render routed components.

@Component({
  selector: 'app-root',
  /* you can use the <app-root></app-root> tag in your HTML to include this component. It effectively replaces the <app-root> tag with the content defined in app.component.html and applies...
  the styles from app.component.css. */
  standalone: true, // Indicates that this component is a standalone component;
  imports: [RouterOutlet, MyFirstCompComponent, MenuComponent], // Specifies the dependencies (imports) required by this standalone component. Here, RouterOutlet is used for routing purposes;
  templateUrl: './app.component.html', // Points to the HTML template file for this component;
  styleUrl: './app.component.css', // Points to the CSS file containing styles for this component;
})
export class AppComponent {
  // Defines the AppComponent class;
  title = 'angular-project-test'; // A class property that holds the title for this component. It can be used in the component's template - this line is also an example of two-way binding;
}

// Contains the TypeScript code defining the AppComponent;
