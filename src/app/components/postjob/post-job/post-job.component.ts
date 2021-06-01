import { Component, OnInit } from '@angular/core';
import { Job } from '../../Classes/job';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { error } from 'util';
import { CompanyService } from 'src/app/services/Company/company.service';
import { Company } from '../../Classes/company';
import { SockectIoService } from 'src/app/services/socket .io/sockect-io.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  time=new Date().toUTCString();
  constructor(private router:Router ,private route:ActivatedRoute,
    private jobServ:JOBService,private CompanyService:CompanyService,private socketServ:SockectIoService) { }

    public jobModel=new Job("","","","",[],"","","",[],"",this.time);
    public ID;
    public companyModel =new Company("","","","","","","","","","");
    public PostJobs=[]
  ngOnInit() {
    //get id from url
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.ID=params.get('ID');

      this.jobServ.getCompanyPosts(this.ID).subscribe(
        result => {
          this.PostJobs = result
        },
        error => {
          console.log(error);
        }
      );
    });
    //get data company
    this.CompanyService.getCompany(this.ID).subscribe(data=>
      {
      //  console.log(data)
       this.companyModel=data;
      }
      );
    

  }



  postJob(){
    this.socketServ.newJob(this.jobModel,this.ID);
    alert("Job Posted")
    this.router.navigate(['/home-company',this.ID]);
    this.socketServ.getJobs().subscribe(
      data=>{
     //   console.log(data);
        
      },
      error=>{
       // console.log(error);
        
      }
    );




  }



}
