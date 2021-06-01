import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from 'src/app/components/Classes/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

 
  constructor(private http:HttpClient) { }
  getCompany(_id):Observable<any>{
    return this.http.get("http://localhost:3000/cprofile/"+_id)
  }
  updateCompany(ID,fd:FormData):Observable<any>{
    return this.http.post<any>('http://localhost:3000/cprofile/edit/'+ID, fd)

  }
}

