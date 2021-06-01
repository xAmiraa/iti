import { Component, OnInit } from '@angular/core';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { SockectIoService } from 'src/app/services/socket .io/sockect-io.service';
import { Student } from '../../Classes/studentClass/student';
import { UserServService } from 'src/app/services/User/user-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
  public studentsModel;

  constructor(private router:Router,private studeServise: StudentServiseService,private socketServ:SockectIoService) { }

  ngOnInit() {

    this.studeServise.getAll().subscribe(data => {
      this.studentsModel = data;
      console.log(this.studentsModel)
    }
    )

    this.socketServ.getStudent().subscribe(
      data=>{
        this.studentsModel=data;
        console.log(data);
        
      },
      error=>{
        console.log(error);
        
      }
    );
  }

  // deleteStudent(student){
  //   this.userServise.deletUser(student.ID).subscribe(data=>
  //     {
  //       alert(" user deleted")
  //     }
  //     )
  //  }
  
  //  goToMoreDetails(ID)
  //     {
  //    window.open('student-profile/'+ID,"_blank")
  //   }

  DeleteUser(student){
    console.log(student.ID);
    this.socketServ.deleteStudent(student.ID);
    this.socketServ.getStudent().subscribe(
      data=>{
      //  console.log(data);
        
      },
      error=>{
      //  console.log(error);
        
      }
    );
    
  }


  goProfile(student){
   // console.log(student.ID);
    
    window.open('/student/'+student.ID, "_blank");
  }


}

