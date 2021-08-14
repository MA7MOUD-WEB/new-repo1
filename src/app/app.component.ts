import { Component } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
declare var $:any;
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app3';

  ngOnInit(): void {
   $()
    
  }
}
