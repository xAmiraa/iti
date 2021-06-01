import { Component, OnInit } from '@angular/core';
import { SockectIoService } from './services/socket .io/sockect-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ITI-LINK';

  constructor(private socketServ:SockectIoService){

  }

  ngOnInit(){
    
  }
}
