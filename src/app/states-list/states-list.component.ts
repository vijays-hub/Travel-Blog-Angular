import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-states-list',
  templateUrl: './states-list.component.html',
  styleUrls: ['./states-list.component.css']
})
export class StatesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showBlock = false;
  toggleDisplay() {
    this.showBlock = !this.showBlock;
  }
}
