import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private _username: string;

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    sessionStorage.setItem('username', value);
    this._username = value;
  }
}
