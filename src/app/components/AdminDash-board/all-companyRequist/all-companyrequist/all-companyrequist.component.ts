import { Component, OnInit } from '@angular/core';
import { SockectIoService } from 'src/app/services/socket .io/sockect-io.service';
import { CompanyRequistService } from 'src/app/services/CompanyRequist/company-requist.service';


@Component({
  selector: 'app-all-companyrequist',
  templateUrl: './all-companyrequist.component.html',
  styleUrls: ['./all-companyrequist.component.css']
})
export class AllCompanyrequistComponent implements OnInit {
  public companyrequists;
  p: number = 1;
  constructor(private socketServ:SockectIoService,private compReqServ:CompanyRequistService) { }

  ngOnInit() {

    this.compReqServ.listCompanyRequis().subscribe(
      data=>{
        this.companyrequists=data;
      },
      error=>{
       // console.log(error);
        
      }
    );

    this.socketServ.getCompanyRequist().subscribe(
      data=>{
       // console.log(data);
        this.companyrequists=data;
       // console.log(data);
        
      },
      error=>{
      //  console.log(error);
        
      }
    );
     
  }

  deleteCompanyreq(companyrequist){
    console.log(companyrequist._id);
    this.socketServ.deleteCompanyRequist(companyrequist._id);
    this.socketServ.getCompanyRequist().subscribe(
     data=>{
       console.log(data);
       
     },
     error=>{
       console.log(error);
       
     }
   );
    
  }

}
