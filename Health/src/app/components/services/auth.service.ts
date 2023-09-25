import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;
  username = '';
  constructor() { }

  login(username:any, password:any){
    if (username === "admin" && password === 'admin'){
      username = username;
      localStorage.setItem('currentUser', username);
      this.loggedIn = true;
    };
      
  }

  logout(){
    this.loggedIn = false;
    localStorage.removeItem(this.username);
  }

  isAuthenticated(){
    return this.loggedIn;
  }
}
