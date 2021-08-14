import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
observable
HttpClient

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  register(formData:any)
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData)
  }

}
