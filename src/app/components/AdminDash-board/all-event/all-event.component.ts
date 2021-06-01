import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/Events/event.service';
import { error } from 'protractor';
import { SockectIoService } from 'src/app/services/socket .io/sockect-io.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.css']
})
export class AllEventComponent implements OnInit {
  public events;
  constructor(private eventser:EventService,private socketServ:SockectIoService,private router : Router) { }

  ngOnInit() {
    

    this.socketServ.getEvents().subscribe(
      data=>{
       this.events=data;    
      },
      error=>{
     //   console.log(error);
        
      }
    );


    this.eventser.listEvent().subscribe(
      data=>{
        this.events=data;
      },
      error=>{
      //  console.log(error);
        
      }
    );
    


  }
 DeleteEvent(event){

  this.socketServ.deleteEvent(event._id);
  this.socketServ.getEvents().subscribe(
    data=>{
     // console.log(data);
      
    },
    error=>{
    //  console.log(error);
      
    }
  );
  
  
  
 }



}
