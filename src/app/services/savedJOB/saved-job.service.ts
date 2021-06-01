import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavedJobService {

  constructor(private http:HttpClient) { }
  

 //  GEI All saved jobs 
 getSavedJOB(_id):Observable<any>{
  return this.http.get<any>("http://localhost:3000/savedJob/list/"+_id)
  
}

 //request to save job 
 SavedJOB(jobID,studentID){
  return this.http.post('http://localhost:3000/savedJob/save/'+jobID+'/'+studentID,'')
}

//cancel job

  cancelSavedJOB(jobID){
    return this.http.delete('http://localhost:3000/savedJob/cancel/'+jobID);
  }


}
