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
      localStorage.setItem('id', '1');
      this.loggedIn = true;
    };
      
  }

  logout(){
    this.loggedIn = false;
    localStorage.clear()
  }

  isAuthenticated(){
    return this.loggedIn;
  }
}
