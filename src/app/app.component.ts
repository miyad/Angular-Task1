import { Component } from '@angular/core';
import { StudentServiceService } from './service/student-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1frontend';
  studentName="";
  constructor(private studentService:StudentServiceService){
    this.studentService.getData().subscribe(data=>{
      console.log(data);
    })
  }

  
  
  saveStudent():void{
    this.studentService.postData({
      "studentName":"New Miyad"+Math.random()
    });
    console.log(this.studentName);
    this.studentName="";
    
    console.log("post executed");
  }
}
