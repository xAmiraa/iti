import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StudentServiseService } from '../services/student/student-servise.service';
import { JOBService } from '../services/job.service';
import { SavedJobService } from '../services/savedJOB/saved-job.service';

@Component({
  selector: 'app-saved-job',
  templateUrl: './saved-job.component.html',
  styleUrls: ['./saved-job.component.css']
})
export class SavedJobComponent implements OnInit {
  public jobs=[];
  p: number = 1;
  public sectionsProfile = ["", ""]
  public studentID: string;

 
  
  constructor(private router: Router, private route: ActivatedRoute, private jobServ: JOBService, private studetentServ:StudentServiseService,private savedSer:SavedJobService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.studentID = params.get('ID');

    });
    this.savedSer.getSavedJOB(this.studentID).subscribe(
      result => {
        for (var i = 0; i < result.length; i++) {
          this.jobServ.listJobNames(result[i].jobID).subscribe(
            data=>{
              this.jobs.push(data);
          //  console.log(this.jobs);
            },
            error=>{
          //    console.log(error);
            }
          );
        }
      //  console.log(result);
        
      },
      error => {
       // console.log(error);

      }
    );

  }

 //cancel job after saved
 cancelSavedJob(job){
  this.savedSer.cancelSavedJOB(job[0]._id).subscribe(
    data=>{
    //  console.log(data);
      alert("Job Cancelld");
      location.reload();

      },
    error=>{
    //  console.log(error);
      
    }
  );


  
}


}