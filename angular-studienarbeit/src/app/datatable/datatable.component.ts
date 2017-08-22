import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  private data;

  getData:Array;

  constructor (private http:HttpClient){}

  Getlogin(){
    //this.httpService.getUserData()

    this.http.get('http://localhost/backend_studienarbeit/db_todo.php')
      .map(res => res)
      .subscribe(
        data=>this.getData = data,
        ()=>console.log(this.getData));
  }

  ngOnInit():void {
    this.Getlogin();

  }
}
