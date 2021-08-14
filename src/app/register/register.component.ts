import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
Router

AuthService

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router:Router) { }


registerForm=new FormGroup ({
  first_name:new FormControl(null, [Validators.minLength(3),Validators.maxLength(10),Validators.required,]),
  last_name:new FormControl(null,[Validators.minLength(3), Validators.pattern('^[a-z]{3,15}$'),Validators.maxLength(10),Validators.required]),
  email:new FormControl(null,[Validators.email,Validators.required,]),
  password:new FormControl(null, [Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,5}$')]),
  age:new FormControl(null ,[Validators.required,Validators.min(16),Validators.max(80)]),

});

// sumitRegisterForm(registerForm:FormGroup){
// this._AuthService.register(registerForm.value).subscribe((response: { message: string; })=>{
// if(response.message == 'success')
// })
// }


  ngOnInit(): void {
  }

}
