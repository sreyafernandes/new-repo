import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  constructor(private router: Router) { }
  userSignIn = new FormGroup({
    em: new FormControl(''),
    passwd: new FormControl('')
  });
  ngOnInit() {}
  SignIn() {
    alert('Sign in');
    // console.warn(this.userSignIn.value);
    // alert('username: ' + this.userSignIn.value.em);
    console.log(this.userSignIn.value);
  }
}
