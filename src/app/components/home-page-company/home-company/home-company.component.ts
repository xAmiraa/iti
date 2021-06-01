import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { error } from 'protractor';
// import { CompanySERvService } from 'src/app/services/company-serv.service';
import { EventService } from 'src/app/services/Events/event.service';
import { CompanySERvService } from 'src/app/services/company-serv.service';
import { CompanyService } from 'src/app/services/Company/company.service';


@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {
  enventstocomany = [
]
  constructor(private router: Router, private route: ActivatedRoute, private jobServ: JOBService, private compServ: CompanySERvService ,private eventss:EventService ,private comp:CompanyService ) { }
  public companyID;
  public jobs = [];
  envents=[]
  pro=[]
  p: number = 1;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.companyID = params.get('ID');
    });
    this.jobServ.getCompanyPosts(this.companyID).subscribe(
      result => {
        this.jobs = result
      },
      error => {
     //   console.log(error);
      }
    );
    this.eventss. listEvent().subscribe(
      data=>{
      //  console.log(data)
      this.envents=data;        
      },
    error=>{
  //  console.log(error);
    
    })
    this.comp. getCompany(this.companyID).subscribe(
      data=>{
    //    console.log(data)
      this.pro=data;        
      },
    error=>{
  //  console.log(error);
    
    })
  }
  onSelect(job) {
    this.router.navigate(['/submited-profiles', job._id,this.companyID]);

  }
  deletJob(job) {
    this.compServ.deleteJob(job._id).subscribe(
      data=>{
      //  console.log(data);
        alert("Job Deleted !");
        location.reload();

      },
      error=>{
     //   console.log(error);
        
      }
    );
  }
  
}
