import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { Job } from '../Classes/job';
import { SavedJobService } from 'src/app/services/savedJOB/saved-job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JObDetailsComponent implements OnInit {

 
  constructor(private router : Router,private jobServ:JOBService,private route:ActivatedRoute, private savedSer:SavedJobService) { }
  public test:boolean=true;
  public test1:boolean=true;
  public ID;
  public jobID;
  public companyID;
  public JobDetails=new Job("","","","",[],"","","",[],"","");
 
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.ID=params.get('ID');
      this.companyID=params.get('companyID');
      this.jobID=params.get('jobID');
    }); 

    this.jobServ.jobDetails(this.jobID).subscribe(
      data=>{
       // console.log(data);
        this.JobDetails=data[0];
        
      },
      error=>{
       // console.log(error);
        
      }
    );
  }

  applytoJob(){
    // console.log(this.ID);
    // console.log(this.companyID);
    // console.log(this.jobID);
    this.jobServ.applyJob(this.ID,this.jobID).subscribe(
      result=>{
        alert("You Applied To Job ")
        this.router.navigate(['/student-home',this.ID]);
      //  console.log(result);
      },
      error=>{
        this.test=false
       // console.log(error);
        
      }
    );
  }
  savedJob(){
    // console.log(this.ID);
    // console.log(this.companyID);
    // console.log(this.jobID);
    this.savedSer.SavedJOB(this.jobID,this.ID).subscribe(
      result=>{
        alert("You saved Job ")
        this.router.navigate(['/saved-job',this.ID]);
        console.log(result);
      },
      error=>{
        this.test1=false
      //  console.log(error);
        
      }
    )
  }

}
