import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/Company/company.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Company } from '../../../src/app/components/Classes/company';
@Component({
  selector: 'app-view-c',
  templateUrl: './view-c.component.html',
  styleUrls: ['./view-c.component.css']
})
export class ViewCComponent implements OnInit {
  public company= new Company("","","","","","","","","","");
  public company_id;
  constructor(private CompanyService:CompanyService, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.company_id=params.get("ID")
    })
    this.CompanyService.getCompany(this.company_id).subscribe(data=>
      {
       this.company=data;
      }
      );

      
  }


}
