import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }


  //get chats for student
  getChats(studentID){
    return this.http.get<any>('http://localhost:3000/chat/chats/'+studentID);
  }



  //get chats for company
  getChatc(companyID){
    return this.http.get<any>('http://localhost:3000/chat/chatc/'+companyID);
  }


  getChatMessages(chatID){
    return this.http.get<any>('http://localhost:3000/message/messages/'+chatID);
  }


  //company create new chat
  createNewChat(companyID,studentID){
      return this.http.post('http://localhost:3000/chat/newChat/'+companyID+'/'+studentID,"");
  }


  createNewMessage(companyID,studentID,msg){
    return this.http.post('  http://localhost:3000/message/newMessage/'+companyID+'/'+studentID,msg);

  }








}
