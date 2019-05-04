import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor
  (
    private authService: AuthService,
    private router: Router
  ) 
  { }

  ngOnInit() {
  }

  onSubmit(form) {

    console.log(form.form);
    debugger;
    const data = form.form.value;
    if(this.authService.login(data)) {
      this.router.navigate(['/admin', 'publish']);
    }
    else {
      alert("Username not found!");
    }

  }

}
