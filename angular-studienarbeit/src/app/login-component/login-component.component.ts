import { Component, OnInit } from '@angular/core';
import {LoginService} from  '../login.service';


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})

export class LoginComponentComponent implements OnInit {

  loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    this.user.setUserLoggedIn(username, password);
    if(username =='admin' && password == 'admin'){

      this.router.navigate(['todoList'])
    }
  }




  constructor (private router: Router, private user:LoginService){}


  ngOnInit():void {


  }


}
