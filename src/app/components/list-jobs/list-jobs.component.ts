import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { Job } from '../Classes/job';


@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  public jobs=[];
  public studentID: string;
  test;

  
  constructor(private router: Router, private route: ActivatedRoute, private jobServ: JOBService, private studetentServ:StudentServiseService) { }
  ngOnInit() {
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.studentID = params.get('ID');
     // console.log(this.studentID);
      

    });
    this.jobServ.listAppliedJobs(this.studentID).subscribe(
      result => {
        for (var i = 0; i < result.length; i++) {
          this.jobServ.listJobNames(result[i].jobID).subscribe(
            data=>{
             this.jobs.push(data);
           //  console.log(data);
             
            },
            error=>{
            //  console.log(error);
            }
          
          );
        //  console.log(result[i]);
          
        }
      },
      error => {
      //  console.log(error);

      }
    );
   
    
    //this.jobModel.location=this.jobs[0].location;
  }

  //details 
  goDetails() {
    this.router.navigate(['/job-details']);

  }

  //cancel job after apply it
  cancelJob(job){
    this.studetentServ.cancelJob(job[0]._id).subscribe(
      data=>{
        //console.log(data);
        alert("Job Cancelld");
        location.reload();

        },
      error=>{
      //  console.log(error);
        
      }
    );
  }

 



}
