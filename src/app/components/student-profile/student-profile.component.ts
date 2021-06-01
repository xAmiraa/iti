import { Component, OnInit } from '@angular/core';
import { Student } from '../Classes/studentClass/student';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  public studentModel = new Student("","","","","","","","",[],"","",[],[],[],"","","","","","");
   public Student_ID;
  public selectedFile:File=null;
  public test:boolean=true;

  constructor(private studeServise:StudentServiseService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.Student_ID=params.get('ID');
    }); 
    this.studeServise.getStudent(this.Student_ID).subscribe(data=>
      {
        this.studentModel=data[0];
      //  console.log( this.studentModel);
        
        
      }
      )
}
onfileSelected(event){
 // console.log(event); 
  this.selectedFile=<File>event.target.files[0];
 // console.log(this.selectedFile);
}

onSubmit(){
  const fd=new FormData();
    // append image file
    if(this.selectedFile==null){
      this.test=false;

    }
    else{
      fd.append('image',this.selectedFile,this.selectedFile.name);
      fd.append('name',this.studentModel.name.toString());
      fd.append('title',this.studentModel.title.toString());
      fd.append('phone',this.studentModel.phone.toString());
      fd.append('Bio',this.studentModel.Bio.toString());
      fd.append('about',this.studentModel.about.toString());
      fd.append('availability',this.studentModel.availability.toString());
      fd.append('certifications',this.studentModel.certifications.toString());
      fd.append('email',this.studentModel.email.toString());
      fd.append('englishLevel',this.studentModel.englishLevel.toString());
      fd.append('experience',this.studentModel.experience.toString());
      fd.append('faculty',this.studentModel.faculty.toString());
      fd.append('graduationYear',this.studentModel.graduationYear.toString());
      fd.append('skills',this.studentModel.skills.toString());
      fd.append('university',this.studentModel.university.toString());
      fd.append('workLink',this.studentModel.workLink.toString());
      fd.append('age',this.studentModel.age.toString());
  
  
  
  
     this.studeServise.updateStudent(this.Student_ID,fd).subscribe(
      result=>{
        alert("changes saved")
        this.router.navigate(['/student-profile',this.Student_ID]);
        },
      error=>{
  
       // console.log(error);
  
      }
      )
    }
    
}


}


