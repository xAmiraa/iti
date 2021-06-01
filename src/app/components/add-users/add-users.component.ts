import { Component, OnInit } from '@angular/core';
import { AddUser } from '../Classes/add-user';
import { UserService } from 'src/app/services/user.service';
import { UserServService } from 'src/app/services/User/user-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  topicHasErr=false;
  errorMsg;
  test=true;
  constructor(private userSer:UserServService,private router : Router) { }
  public userModel=new AddUser('','','','');
  ngOnInit() {
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
  adduser(){
    this.userSer.signUp(this.userModel).subscribe(
     data=>{
      // console.log("user Created");
       alert("User Added")
       window.location.reload();
      
     },
     error=>{
       this.test=false;
       this.errorMsg=error.error.message;
      // console.log(error.error.message);
      
     }
    );
    
  }
}
