import { Injectable } from '@angular/core';
import { AddEvent } from 'src/app/components/Classes/add-event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  
  // Add Event
  addEvent(fd:FormData) {
   
    return this.http.post('http://localhost:3000/event/addevent',fd);
  }

// List Event
 listEvent():Observable<any>{

    return this.http.get("http://localhost:3000/event/listevent")
  }

//Event delete by _id
deletEvent(ID):Observable<any>{

    return this.http.delete("http://localhost:3000/event/deleteevent/"+ID);
  }
}
