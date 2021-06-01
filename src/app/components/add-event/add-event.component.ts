import { Component, OnInit } from '@angular/core';
import { AddEvent } from '../Classes/add-event';
import { EventService } from 'src/app/services/Events/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  public test:boolean=true;
  constructor(private everntServ:EventService,private router : Router) { }
  public eventModel = new AddEvent('','','','','');
  ngOnInit() {
  }
  selecteFile:File=null;
  onfileSelected(event){
    console.log(event); 
    this.selecteFile=<File>event.target.files[0];
  }


  addEvent() {

    const fd=new FormData();
    if(this.selecteFile==null){
      this.test=false;

    }
    // append image file
    else{
      fd.append('image',this.selecteFile,this.selecteFile.name);

    // add details from model
    fd.append('title',this.eventModel.title.toString());
    fd.append('date',this.eventModel.date.toString());
    fd.append('details',this.eventModel.details.toString());
    fd.append('place',this.eventModel.place.toString());
    

      this.everntServ.addEvent(fd).subscribe(

        data=>{
        //  console.log(data);
          alert("Event Added")
          window.location.reload();
          
        },
        error=>{
          this.test=false
        //  console.log(error);
        }
  
       );
    }
    

   
     
   }



}
