import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CompanyService } from 'src/app/services/Company/company.service';
import { ChatService } from 'src/app/services/chat/chat.service';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';

@Component({
  selector: 'app-message-company',
  templateUrl: './message-company.component.html',
  styleUrls: ['./message-company.component.css']
})
export class MessageCompanyComponent implements OnInit {

  companyID;
  students=[];
 public chats;
 result=[];
 constructor(private route:ActivatedRoute,private studentServ:StudentServiseService,
  private router : Router,private chat:ChatService) { }
  ngOnInit() {


    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.companyID=params.get('ID');
    });

    
    this.chat.getChatc(this.companyID).subscribe(
      data=>{
       this.chats=data.result;
    //   console.log(this.chats);
      //  console.log(data.result[0].studentID);
     //   console.log(data.result.length);
        for (var i=0; i<data.result.length; i++){
          this.studentServ.getStudent(data.result[i].studentID).subscribe(
            data=>{
              this.students.push(data);
            //  console.log(data);
              
            }
          );
        }  
      },
      error=>{
       // console.log(error);
        
      }
    );



  }




  readMore(item){
    this.router.navigate(['readMoreCompany',this.companyID,item[0].ID],{relativeTo:this.route});
    console.log(item[0].ID);
    
  }
}
