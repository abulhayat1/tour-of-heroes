import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  messages: string[] = [];
  value = 10;
  
  add(message: string){
    this.messages.push(message);
  }
  
  clear(){
    this.messages = [];
  }

  constructor() { }
}
