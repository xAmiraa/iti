import { Component, OnInit } from '@angular/core';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserServService } from 'src/app/services/User/user-serv.service';
import { SockectIoService } from 'src/app/services/socket .io/sockect-io.service';


@Component({
  selector: 'app-all-company',
  templateUrl: './all-company.component.html',
  styleUrls: ['./all-company.component.css']
})
export class AllCompanyComponent implements OnInit {
public companyModel;
p: number = 1;
  constructor(private studeServise:StudentServiseService,private route:ActivatedRoute,private socketServ:SockectIoService) { }
  public User_ID;
  ngOnInit() {
    this.studeServise.getAllCompany().subscribe(data=>
      {
        this.companyModel=data;
        console.log(this.companyModel)
      }
    );

    this.socketServ.getCompnay().subscribe(
      data=>{
        console.log(data);
        this.companyModel=data;
      },
      error=>{
        console.log(error);
        
      }
    );
     


  
  }
   
  
    // deleteUser(company){
    //   this.userServise.deletUser(company.ID).subscribe(data=>
    //     {
    //       alert(" user deleted")})}
    

     deleteUser(company){
       console.log(company.ID);
       this.socketServ.deleteCompany(company.ID);
       this.socketServ.getCompnay().subscribe(
        data=>{
        //  console.log(data);
          
        },
        error=>{
         // console.log(error);
          
        }
      );
       
     }

     goProfile(company){
      window.open('/show-company/'+company.ID, "_blank");
     }
   
    //  toMoreDetails(ID)
    //   {
    //  window.open('company-profile/'+ID,"_blank")
    // }

}
