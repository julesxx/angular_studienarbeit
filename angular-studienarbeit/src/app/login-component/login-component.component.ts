import { Component, OnInit } from '@angular/core';
import {LoginService} from  '../login.service';


import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})

export class LoginComponentComponent implements OnInit {
  getData:Array;
  profile;
  constructor (private _login:LoginService){}


  ngOnInit():void {

    console.log("json"+this._login.Getlogin());
    this.profile=this._login.Getlogin().subscribe( data=>this.getData = data);
    console.log(this.getData);
  }


}
