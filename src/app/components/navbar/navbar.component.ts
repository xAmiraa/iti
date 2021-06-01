import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { Student } from '../Classes/studentClass/student';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private studeServise:StudentServiseService,private route:ActivatedRoute,private router : Router) { }
  public ID;

  public student = new Student("","","","","","","","",[],"","",[],[],[],"","","","","","");
    public student_id;
  ngOnInit() {
    
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.ID=params.get('ID');
    });
    
     this.route.paramMap.subscribe((params:ParamMap)=>{
       this.student_id = params.get("ID")
       })
      this.studeServise.getStudent(this.student_id).subscribe(data=>
        {
          this.student=data[0];
         // console.log( this.student)
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
