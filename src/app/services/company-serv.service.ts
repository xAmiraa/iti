import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanySERvService {

  constructor(private http :HttpClient) { }
  deleteJob(jobID){

    return this.http.delete("http://localhost:3000/allJob/delete/"+jobID);
  }
}
