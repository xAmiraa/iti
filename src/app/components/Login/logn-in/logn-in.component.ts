import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { error } from 'util';
import { JsonPipe } from '@angular/common';



@Component({
  selector: 'app-logn-in',
  templateUrl: './logn-in.component.html',
  styleUrls: ['./logn-in.component.css']
})
export class LognInComponent implements OnInit {

  constructor(private loginServ:LoginService,private router : Router) { }
 public userModel=new user('','');
 public test:boolean=true;
 type:string="";
 public data:any;
  ngOnInit() {
  }
  login(){
   // console.log(this.userModel);
    this.loginServ.loginUser(this.userModel).subscribe(
      result=>{
        this.data=result;
        localStorage.setItem('token',result.toString() );
        localStorage.setItem('type',result.toString());
      // console.log(this.data.type);
        
        if(this.data.type=='student')
        {
          this.router.navigate(['/student-home',this.data.userID]);

        }
        if(this.data.type=='company')
        { 
          this.router.navigate(['/home-company',this.data.userID]);

        }
        if(this.data.type=='admin')
        {
          this.router.navigate(['/admin',this.data.userID]);

        }

    },
  error=>{
    this.test=false;
   // console.log(error)
  }         

    )}
}
