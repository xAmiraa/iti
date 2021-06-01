import { Component, OnInit } from '@angular/core';
import { Student } from '../../Classes/studentClass/student';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-vieww',
  templateUrl: './student-vieww.component.html',
  styleUrls: ['./student-vieww.component.css']
})
export class StudentVIEWWComponent implements OnInit {

  public student = new Student("","","","","","","","",[],"","",[],[],[],"","","","","","");
  public student_id;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  constructor(private studeServise:StudentServiseService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.student_id = params.get("ID")
      })
      this.studeServise.getStudent(this.student_id).subscribe(data=>
        {
          this.student=data[0];
          //console.log( this.student)
        }
        )
        
  }

}
