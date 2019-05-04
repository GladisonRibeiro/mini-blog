import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: { username: string, password:string}) {
    
    if (user.username == 'pudin') {
      localStorage.setItem('token', 'Basic ');
      return true;
    }
    return false;
  }

  isLoggedIn() : boolean {
    return !!localStorage.getItem('token');
  }

}
