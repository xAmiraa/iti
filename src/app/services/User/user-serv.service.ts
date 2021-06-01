import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServService {

  constructor(private http:HttpClient) { }
  
  //  GEI ALL USER TYPE STUDENT 
  getAllStudent():Observable<any>{
    return this.http.get<any>("http://localhost:3000/users/listStusent")
    
  
}

 //  GEI ALL USER TYPE COMPANY 
 getAllCompany():Observable<any>{
  return this.http.get<any>("http://localhost:3000/users/listCompany")
  

}
 // DELETE USER 
 deletUser(ID):Observable<any>{

  return this.http.delete("http://localhost:3000/users/delete/"+ID);
}

// NEW USER
signUp(user)
{
  return this.http.post('http://localhost:3000/users/signup',user);
}

}