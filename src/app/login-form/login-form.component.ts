import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import swal from 'sweetalert'; 

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }

  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
  	
  	if(username == 'admin' && password == '12345') {
      this.user.setUserLoggedIn();
  		this.router.navigate(['profile']);
    }
    else swal ('The username or password you entered is incorrect');
    }
}