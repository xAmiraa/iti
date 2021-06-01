import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/Company/company.service';
import { EventService } from 'src/app/services/Events/event.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SockectIoService } from 'src/app/services/socket .io/sockect-io.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private everntServ:EventService,private router : Router, private route:ActivatedRoute) { }
  public ID;
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.ID = params.get("ID")
      })
  }
  
  logOut(){
    localStorage.removeItem("token")
    this.router.navigate(['/login'])
  }
    
 
}
