import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JOBService {
  constructor(private http :HttpClient){ }

  allJobs():Observable<any>{
    return this.http.get<any>('http://localhost:3000/allJob');
  }
  createPost(companyID:string,jobModel):Observable<any> {
    return this.http.post<any>('http://localhost:3000/allJob/add/'+companyID,jobModel);

  }
  getCompanyPosts(companyID:string):Observable<any>{
    return this.http.get('http://localhost:3000/allJob/companyjobs/'+companyID);
  }
  //delete post of job
  deleteJob(_id){
    return this.http.delete('http://localhost:3000/allJob/delete/'+_id);
  }

  //Applu for job 
  applyJob(studentID,jobID){
    
    return this.http.post('http://localhost:3000/appliedstudent/apply/'+studentID+'/'+jobID,'')
  }


  // submited profiles

  getsubmitedStudent(jobID):Observable<any>{
    return this.http.get<any>('http://localhost:3000/appliedstudent/companyjobs/'+jobID)
  }

  //list students (names)

  listStudents(studentID):Observable<any>{
    return this.http.get<any>('http://localhost:3000/appliedstudent/studentList/'+studentID)
  }



  // get student jobs 
  listAppliedJobs(studentID):Observable<any>{
    return this.http.get<any>('http://localhost:3000/appliedstudent/studentJobs/'+studentID)
  }


  
  //list jobs names (names)

   listJobNames(jobID):Observable<any>
   {
    return this.http.get<any>('http://localhost:3000/allJob/names/'+jobID)
   }


   // get student Name and image from sprofile

   listSprofile(userID):Observable<any>{
    return this.http.get<any>('http://localhost:3000/sprofile/'+userID);
   }

/*
// job details
  jobDetails(_id):Observable<any>{
    return this.http.get<any>('http://localhost:3000/allJob/details/'+_id);
  }

}*/
   // get job details

   jobDetails(jobID):Observable<any>{
    return this.http.get<any>('http://localhost:3000/allJob/details/'+jobID);
   }
}
