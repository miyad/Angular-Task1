import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }

  getData():Observable<Object>{
    const url = "http://localhost:8080/student/all";
    return this.http.get(url);
  }
  postData(student:any):void{
    const post_url="http://localhost:8080/newStudent";
    this.http.post<any>(post_url,student)
    .subscribe(data=>{
      console.log(data);
      
    });
    console.log("came here ");
    console.log(student);
    
    
  }
}

