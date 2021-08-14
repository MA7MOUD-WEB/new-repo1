import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

title="";

currentCustomer = 'Maria';
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $("p").click(function(){
        $().hide();
      });
    });
  }

}
