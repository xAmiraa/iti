import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ChatService } from 'src/app/services/chat/chat.service';
import { CompanyService } from 'src/app/services/Company/company.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  studentID;
  company=[];
 public chats;
 result=[];

  constructor(private route:ActivatedRoute,private compServ:CompanyService,
    private router : Router,private chat:ChatService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.studentID=params.get('ID');
    });
    
    this.chat.getChats(this.studentID).subscribe(
      data=>{
        this.chats=data.result;
      //  console.log(this.chats);
      //   console.log(data.result[0].companyID);
       // console.log(data.result.length);
        for (var i=0; i<data.result.length; i++){
          this.compServ.getCompany(data.result[i].companyID).subscribe(
            data=>{
              this.company.push(data);
            }
          );
        }
  
      },
      error=>{
       // console.log(error);
        
      }
    );

  }
  readMore(comp){
    this.router.navigate(['readMore',comp.ID,this.studentID],{relativeTo:this.route});
   // console.log(comp.ID);
    
  }
}
