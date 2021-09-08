import { Component, OnInit} from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  
  constructor(public messageService: MessageService) { }

  testName: string = "hayat";

  ngOnInit(): void {
  }
  
  // getName(): void {
  //   this.heroes = this.heroService.;
  // }

}