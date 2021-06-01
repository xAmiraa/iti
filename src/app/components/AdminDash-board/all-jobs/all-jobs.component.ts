import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { CompanySERvService } from 'src/app/services/company-serv.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {
public jobs=[];
p: number = 1;
constructor(private router: Router, private route: ActivatedRoute, private jobServ: JOBService, private studetentServ:StudentServiseService,private compServ: CompanySERvService) { }

  ngOnInit() {
    this.jobServ.allJobs().subscribe(
      data=>{
      this.jobs=data;   
   //   console.log(data);
           
      },
error=>{
 // console.log(error);
  
}

    );
  }
  deletJob(job) {
    this.compServ.deleteJob(job._id).subscribe(
      data=>{
      //  console.log(data);
        
      },
      error=>{
      //  console.log(error);
        
      }
    );
  }

}
