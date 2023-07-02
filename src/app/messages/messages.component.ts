import { Component } from '@angular/core';
import { MessageService } from '../message.service';

// Messages Component
//  - Loads the messageService from constructor.
//  - HTML template loads the messageService.messages

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}