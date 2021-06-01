import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Company } from '../Classes/company';
import { CompanyService } from 'src/app/services/Company/company.service';
declare var $: any;
@Component({
  selector: 'app-navbar-company',
  templateUrl: './navbar-company.component.html',
  styleUrls: ['./navbar-company.component.css']
})
export class NavbarCompanyComponent implements OnInit {

  constructor(private router:Router ,private route:ActivatedRoute,private CompanyService:CompanyService) { }
  public ID;
  public company=new Company("","","","","","","","","","");
  public company_id;
  ngOnInit() {
   
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.ID=params.get('ID');
    });
    
     this.route.paramMap.subscribe((params:ParamMap)=>{
       this.company_id = params.get("ID")
       })
      this.CompanyService.getCompany(this.company_id).subscribe(data=>
        {
          this.company=data;
        //  console.log( this.company)
        }
        )
    
    
    //jquery
$(window).scroll(function(){
  var $w = $(this),
      st = $w.scrollTop(),
      navbar = $('.ftco_navbar'),
      sd = $('.js-scroll-wrap');

  if (st > 150) {
    if ( !navbar.hasClass('scrolled') ) {
      navbar.addClass('scrolled');	
    }
  } 
  if (st < 150) {
    if ( navbar.hasClass('scrolled') ) {
      navbar.removeClass('scrolled sleep');
    }
  } 
  if ( st > 350 ) {
    if ( !navbar.hasClass('awake') ) {
      navbar.addClass('awake');	
    }
    
    if(sd.length > 0) {
      sd.addClass('sleep');
    }
  }
  if ( st < 350 ) {
    if ( navbar.hasClass('awake') ) {
      navbar.removeClass('awake');
      navbar.addClass('sleep');
    }
    if(sd.length > 0) {
      sd.removeClass('sleep');
    }
  }
});
  }

  logOut(){
    localStorage.removeItem("token")
    this.router.navigate(['/login'])
  }



 

}
