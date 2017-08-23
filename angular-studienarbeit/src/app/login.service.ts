import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class LoginService {
  private isUserLoggedIn;
  private username;

  constructor(private http:HttpClient) {
    this.isUserLoggedIn = false;
  }


  setUserLoggedIn( username:string,  password: string){


    this.isUserLoggedIn = true;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'Content-Type: application/json');

    var params = 'user_name="Joel"&&password="Joel"';

    this.http.post('http://localhost/backend_studienarbeit/db_user.php', JSON.stringify(params) , {headers: headers})
      .subscribe(
        data => console.log('Received:' + data),
        err => console.log("Fehler: "+err),
        () => console.log('Call Complete')

      );

  }


  getUserLoggedIn(){
   return this.isUserLoggedIn;
  }

}
