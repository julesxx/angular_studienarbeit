import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {


  constructor(private http:HttpClient) { }


  Getlogin(){

    return this.http.get(`http://localhost/backend_studienarbeit/db_todo.php`)
      .map((res:Response) => res );
  }


}
