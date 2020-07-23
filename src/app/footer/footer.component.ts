import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message:string="We'll never share your email with anyone else.";

  userData= new UserInfo("","")

}
