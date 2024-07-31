import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  standalone: true,
  imports: [],
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.css'
})
export class MessageDetailsComponent {
  
  @Input()
  message: any = {}
  @Input()
  index: number = -1;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>()

  onDelete(): void {
     this.delete.emit(this.index)
  } 

}

/* 

How to connect two components(parent to child) and use data from one to another ->

1. Let's create a new component called message-details, create a style and structure to it!;
2. Inside the parent component(in this case the my-first-comp) let's create a div with a class of flex-container and inside of it let's use the child component's template...
placeholder(<app-message-details></app-message-details>), now we are using a child component inside a parent one;
3. Now we want to give this child component the same functionality as the pseudo code in the parent component, by adding a *ngIf conditional in the template wrapper and since we want to...
loop over the list of messages of the messages array variable inside the parent component TS file, we'll add the *ngFor to loop to every "msg"(object with a name key, an email key and a...
message key) inside the messages array, and getting each iteration index as well, so now, every time the submit is done, a new box is added in the loop, but we still are not displaying any...
correct information;
4. Now, inside this file(message-details TS file), inside the export, we must include and import the @Input(), which is a decorator used to define properties that can receive data from a...
parent component. It allows a parent component to pass data to a child component. And below it we create a message variable that is an object;
5. Going back to the parent structure, and the child template placeholder, we can type [message]="msg", setting the message object inside the child TS file to the msg of the for loop, that...
loops over the variable inside the parent TS file, now inside the child structure, we can use the message object, to display the name, email and message(message.name, message.email...);

How to connect two components(child to parent) and use data from one to another ->

1. We create inside the child HTML a delete button, and back in the child TS we add a new variable to communicate under a new Input() called index;
2. Now inside the parent HTML in the placeholder, we can set the index to the i of the for loop iteration([index]="i");
3. Inside the child HTML create an event of click in the delete btn and bind it to a function called onDelete that you can create inside the child TS export, and now we need to use another...
decorator called @Output(), used to create custom events that child components can emit to notify parent components about changes or actions, allowing communication from child to parent...
components.
4. Under the decorator, we need to declare a variable that we'll call delete, and we need to make the value of the delete key a class used to create custom events that components can emit to...
communicate with other components, particularly parent components, called EventEmitter(don't forget to import it). 
5. We also need to set a type for the delete variable, in this case it'll be an EventEmitter of type number(index), and we need to initialize the delete property with a new instance of...
EventEmitter. The EventEmitter constructor creates an instance that can be used to emit events of the specified type, in this case, number(new EventEmitter<number>()).
6. Inside the onDelete function, we need to create the emit by typing this.delete.emit(what we want to emit), in this case is the index;
7. Inside the parent's HTML we need to listen to the (delete) event, and inside it we need to craete a method/function that is called deleteMessage(), and we need to pass $event as an...
argument, since it will contain the value sent bt the child component.
8. Inside the parent TS file, inside the export we create a method called deleteMessage passing the index of type number and inside it we need to splice the messages array of objects, by...
setting the first argument to the current index(the index of the item we want to delete), and the amount of the deletes we want to do from that position, which in this case is 1;

PS: The emit will only pass to the parent if the delete button is clicked;

*/
