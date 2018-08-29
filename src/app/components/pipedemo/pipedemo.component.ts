import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  today;
  cost;
  constructor() { }

  ngOnInit() {
    this.today = new Date();
    this.cost = 20;
  }

}
