import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { error } from 'protractor';
import { UserServService } from 'src/app/services/User/user-serv.service';

@Component({
  selector: 'app-students-profile-submitted',
  templateUrl: './students-profile-submitted.component.html',
  styleUrls: ['./students-profile-submitted.component.css']
})
export class StudentsProfileSubmittedComponent implements OnInit {
  public jobs=[]
  jobID: string;
  ID;
  students=[];
  constructor(private router : Router,private jobServ:JOBService, private userServise:UserServService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.jobID=params.get('jobID');
      this.ID=params.get('ID');
      this.jobServ.getCompanyPosts(this.ID).subscribe(
        result => {
          this.jobs = result
        },
        error => {
         // console.log(error);
        }
      );
      
    }); 
   
    this.jobServ.getsubmitedStudent(this.jobID).subscribe(
      result=>{
        for (var i=0; i<result.length; i++){
         this.jobServ.listSprofile(result[i].studentID).subscribe(
           data=>{
           //  console.log(data);
             this.students.push(data);
           },
           error=>{
            //  console.log(error);
             
           }
         );
          
        }        
      },
      error=>{
        // console.log(error);
        
      }
    );

  }

  seeProfile(student){
    window.open('/show-student/'+student.ID+'/'+this.ID, "_blank");
    // console.log("TESSST");
    // console.log(student.ID);
    
    
  }

  MoreDetails(ID)
      {
     window.open('student-profile/'+ID,"_blank")
    }
}
