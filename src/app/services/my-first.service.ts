import { Injectable } from '@angular/core'; // Is a decorator that marks the class as available to be injected as a dependency;

@Injectable({
  providedIn: 'root', // Tells Angular to provide this service at the root level, which means it will be a singleton and available throughout the entire application;
})
export class MyFirstService {
  // Class that can be used to encapsulate logic, data access, or any other business logic that you want to share across multiple components or services;

  messages: any[] = []; // Is an array that will hold message objects

  constructor() {
    // The constructor is calling the "init" method when an instance of the service is created. This is where the initial set of messages is inserted into the messages array;
    this.init();
  } // The constructor is where you can inject other services or dependencies into this service;

  init(): void {
    // The init method is used to populate the messages array with some initial messages. It calls the insert method to add each message to the array;
    this.insert({
      name: 'Jv',
      email: 'Jv@gmail.com',
      message: 'hey this is jv',
    });
    this.insert({
      name: 'Gabriel',
      email: 'gabriel@gmail.com',
      message: 'hey this is gabriel',
    });
    this.insert({
      name: 'Pedro',
      email: 'pedro@gmail.com',
      message: 'hey this is pedro',
    });
  }

  insert(message: { name: string; email: string; message: string }): void {
    // The insert method takes a message object as a parameter and adds it to the messages array.
    this.messages.push(message); // Pushing the message to the messages from "this" file;
  }

  getAllMessages(): any[] {
    // getAllMessages returns the array of messages, allowing other parts of the application to retrieve the list of messages stored in this service;
    return this.messages; // Returning the messages from "this" file;
  }

  deleteMessage(index: number): void {
    // deleteMessage removes a message from the messages array at the specified index. The splice method is used to modify the array by removing one item at the given index;
    this.messages.splice(index, 1); // Splicing the messages from "this" messages;
  }
}
