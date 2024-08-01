import { CommonModule } from '@angular/common'; // For the *ngIf and *ngFor to work this need to be imported;
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from '../message-details/message-details.component'; // For the ngModels to work this need to be imported;
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  standalone: true,
  imports: [FormsModule, CommonModule, MessageDetailsComponent],
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.css',
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: any[] = [];

  // YOU CANNOT ASSIGN VALUES TO COMPONENT PROPERTIES DIRECTLY OUTSIDE A METHOD OR A CONSTRUCTOR

  /* 
  
  Property Injection -> private service: MyFirstService = inject(MyFirstService) ---> inject must be imported;
  
  constructor() {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = true;
  }

  */

  // Constructor Injection ->
  constructor(private service: MyFirstService) {
    this.messages = this.service.getAllMessages();
    // Setting the messages from "this" file to the service(MyFirstService) getAllMessages() that returns all the messages created in the my-first.service.ts file;
    this.isSubmitted = true; // setting the isSubmitted to true so we can see;
  }

  /* To use the MyFirstService service in a component, you need to inject it into the component's constructor -> 
  
  1. Import the service at the top of your component file;
  2. Inject the service in the component's constructor. This is where you declare that you want to use MyFirstService in your component
  3. "private service: MyFirstService" is where the service is injected. The "private" keyword means that this variable is only accessible within this class;
  
  */

  onSubmit(): void {
    this.service.insert({
      // instead of messages.push we are using service.insert, using the insert method inside the MyFirstService service;
      name: this.name,
      email: this.email,
      message: this.message,
    });
    (this.name = ''), (this.email = ''), (this.message = '');
    this.isSubmitted = true;
    console.log(this.messages);
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index); // Instead of doing the this.messages.splice(index, 1) here, we are doing in the deleteMessage() method inside the MyFirstService service;
  }

  onConsole(): void {
    console.log('button submit clicked');
  }
}
