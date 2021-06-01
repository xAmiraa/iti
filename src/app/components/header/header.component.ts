import { Component, OnInit } from '@angular/core';
import { CompanyRequist } from '../Classes/requistClass/company-requist';
import { CompanyRequistService } from 'src/app/services/CompanyRequist/company-requist.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public requistModle =  new CompanyRequist('','','');
 topicHasErr=false;
 errorMsg;
 test=true;
  constructor(private comrequist:CompanyRequistService) { }

  ngOnInit() {


    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }























    
   

  
  }

  ValidateTopic(topicValue)
  {
   if(topicValue==='default')
  {
   this.topicHasErr=true;
  }
   else
  {
   this.topicHasErr=false;
  }
  }


  addRequist(){
    this.comrequist.addCompanyRequis(this.requistModle).subscribe(
     data=>{
     //  console.log("add Requist");
       alert("Your meesage sent ");
       window.location.reload();
      
     },
     error=>{
       this.test=false;
       this.errorMsg=error.error.message;
      
     }
    );
    
  }

}
