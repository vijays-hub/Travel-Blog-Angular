import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showBlock = false;
  toggleDisplay() {
    this.showBlock = !this.showBlock;
  }

  // showMap(){
  //     $(document).ready(function(){
  //       $("#map").toggle()
  //     })
        
  //   }
}
