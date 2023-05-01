import { Component, OnInit } from '@angular/core';
import { Cafes } from './cafes';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {

  private cafes: Array<Cafes> = [];

  constructor() { }

  ngOnInit() {
  }

}
