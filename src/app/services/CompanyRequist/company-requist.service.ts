import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyRequistService {

  constructor(private http:HttpClient) { }

  // Add CompanyRequist
  addCompanyRequis(requist) {
   
    return this.http.post('http://localhost:3000/companyrequist/companyrequist',requist);
  }

// List CompanyRequis
 listCompanyRequis():Observable<any>{

    return this.http.get("http://localhost:3000/companyrequist/listcompanyrequist")
  }

//CompanyRequis delete by _id
deletCompanyRequis(ID):Observable<any>{

    return this.http.delete("http://localhost:3000/companyrequist/deletecompanyrequist/"+ID);
  }


}
