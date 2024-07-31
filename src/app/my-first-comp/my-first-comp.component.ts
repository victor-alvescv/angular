import { CommonModule } from '@angular/common'; // For the *ngIf and *ngFor to work this need to be imported;
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For the ngModels to work this need to be imported;

@Component({
  selector: 'app-my-first-comp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.css',
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: any[] = [];

  onSubmit(): void {
    this.messages.push({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    (this.name = ''), (this.email = ''), (this.message = '');
    this.isSubmitted = true;
    console.log(this.messages)
  }

  onConsole(): void {
    console.log('button submit clicked');
  }
}
