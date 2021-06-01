import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ChatService } from 'src/app/services/chat/chat.service';
import { Message } from '../../Classes/message';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router : Router,private chat:ChatService) { }
 public messages;
 public studentID;
 public companyID;
 public chatID;
 public msg=new Message('');
 

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
     
      this.companyID=params.get('companyID');
      this.studentID=params.get('studentID');
      this.chatID=this.companyID+this.studentID;

      this.chat.getChatMessages(this.chatID).subscribe(
        data=>{
          this.messages=data.result;
        //  console.log(data);
          
        },
        error=>{
         // console.log(error);
          
        }
      );

    });


  }


  sendMsg(){
     // console.log(this.chatID);
        this.chat.createNewMessage(this.companyID,this.studentID,this.msg).subscribe(
          data=>{
         //   console.log(data);
            alert("message sent");
            location.reload();

            
          },
          error=>{
         //   console.log(error);
            
          }
        );
  }
 



}
