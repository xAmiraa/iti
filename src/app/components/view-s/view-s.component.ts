import { Component, OnInit } from '@angular/core';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Student } from '../Classes/studentClass/student';
import { ChatService } from 'src/app/services/chat/chat.service';
import { Message } from '../Classes/message';

@Component({
  selector: 'app-view-s',
  templateUrl: './view-s.component.html',
  styleUrls: ['./view-s.component.css']
})
export class ViewSComponent implements OnInit {
  public student = new Student("","","","","","","","",[],"","",[],[],[],"","","","","","");
  public student_id;  
   public companyID;
  
  public msg=new Message("");
  constructor(private studeServise:StudentServiseService,private route:ActivatedRoute,private chat:ChatService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.student_id = params.get("ID");
      this.companyID = params.get("companyID")

      })
      this.studeServise.getStudent(this.student_id).subscribe(data=>
        {
          this.student=data[0];
          
        }
        )
        
  }

  send(){
    this.chat.createNewChat(this.companyID,this.student_id).subscribe(
      data=>{
      //  console.log(data);
        this.chat.createNewMessage(this.companyID,this.student_id,this.msg).subscribe(
          data=>{
       //     console.log(data);
            alert("message sent");
            this.msg.msg="";
          },
          error=>{
       //     console.log(error);
          }
          
        );
        
      },
      error=>{
      //  console.log(error);
        
      }
    );
    
    
  }

}
