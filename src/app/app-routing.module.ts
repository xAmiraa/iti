import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LognInComponent } from './components/Login/logn-in/logn-in.component';
import { AuthenticationGuardService } from './services/Auth/authentication-guard.service';
import { JObDetailsComponent } from './components/job-details/job-details.component';
import { HomeComponent } from './components/home/home/home.component';
import { HomeCompanyComponent } from './components/home-page-company/home-company/home-company.component';
import { PostJobComponent } from './components/postjob/post-job/post-job.component';
import { StudentsProfileSubmittedComponent } from './components/students-profile-submitted/students-profile-submitted.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { ViewSProfileComponent } from './components/view-sprofile/view-sprofile.component';
import { ManageStudentsComponent } from './components/AdminDash-board/manage-students/manage-students.component';
import { AllJobsComponent } from './components/AdminDash-board/all-jobs/all-jobs.component';
import { AllCompanyComponent } from './components/AdminDash-board/all-company/all-company.component';
import { AllEventComponent } from './components/AdminDash-board/all-event/all-event.component';
import { AddUser } from './components/Classes/add-user';
import { AddEvent } from './components/Classes/add-event';
import { AddEventComponent } from './components/add-event/add-event.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile/company-profile.component';
import { EditCompanyProfileComponent } from './components/edit-company-profile/edit-company-profile/edit-company-profile.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { ViewSComponent } from './components/view-s/view-s.component';
import { ViewCComponent } from './view-c/view-c.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ReadMoreComponent } from './components/ReadMore/read-more/read-more.component';
import { SavedJobComponent } from './saved-job/saved-job.component';
import { MessageCompanyComponent } from './components/messagesCompany/message-company/message-company.component';
import { ReadMoreCompanyComponent } from './components/ReadMoreCompany/read-more-company/read-more-company.component';
import { PageNotFoundComponent } from './components/PageNotFound/page-not-found/page-not-found.component';
import { AllCompanyrequistComponent } from './components/AdminDash-board/all-companyRequist/all-companyrequist/all-companyrequist.component';
import { StudentVIEWWComponent } from './components/studentVIEW/student-vieww/student-vieww.component';


const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login',component:LognInComponent},


  {path:'student-home/:ID',component:HomeComponent,canActivate:[AuthenticationGuardService]},
  {path:'student-profile/:ID',component:ViewSProfileComponent,canActivate:[AuthenticationGuardService]},
  {path:'edit-student-profile/:ID',component:StudentProfileComponent,canActivate:[AuthenticationGuardService]},
  {path:'job-details/:ID',component:JObDetailsComponent,canActivate:[AuthenticationGuardService]},
  {path:'list-jobs/:ID',component:ListJobsComponent},
  {path:'saved-job/:ID',component:SavedJobComponent},
  {path:'job-details/:ID/:companyID/:jobID',component:JObDetailsComponent,canActivate:[AuthenticationGuardService]},

  {path:'home-company/:ID',component:HomeCompanyComponent,canActivate:[AuthenticationGuardService]},
  {path:'post-job/:ID',component:PostJobComponent,canActivate:[AuthenticationGuardService]},
  {path:'submited-profiles/:jobID/:ID',component:StudentsProfileSubmittedComponent,canActivate:[AuthenticationGuardService]},
  {path:'company-profile/:ID',component:CompanyProfileComponent,canActivate:[AuthenticationGuardService]},
  {path:'edit-company-profile/:ID',component:EditCompanyProfileComponent,canActivate:[AuthenticationGuardService]},
  

  {path:'admin/:ID',component:AllJobsComponent,canActivate:[AuthenticationGuardService]},
  {path:'manage-students/:ID',component:ManageStudentsComponent,canActivate:[AuthenticationGuardService]},
  {path:'manage-company/:ID',component:AllCompanyComponent,canActivate:[AuthenticationGuardService]},
  {path:'maneg-events/:ID',component:AllEventComponent,canActivate:[AuthenticationGuardService]},
  {path:'add-user/:ID',component:AddUsersComponent,canActivate:[AuthenticationGuardService]},
  {path:'add-event/:ID',component:AddEventComponent,canActivate:[AuthenticationGuardService]},
  {path:'request/:ID',component:AllCompanyrequistComponent,canActivate:[AuthenticationGuardService]},


  {path:'student/:ID',component:StudentVIEWWComponent,canActivate:[AuthenticationGuardService]},


  {path:'show-student/:ID/:companyID',component:ViewSComponent,canActivate:[AuthenticationGuardService]},
  {path:'show-company/:ID',component:ViewCComponent,canActivate:[AuthenticationGuardService]},


  {path:'message/:ID',component:MessagesComponent,
  children:[{path:'readMore/:companyID/:studentID',component:ReadMoreComponent}]},
  

  {path:'messageCompany/:ID',component:MessageCompanyComponent,
  children:[{path:'readMoreCompany/:companyID/:studentID',component:ReadMoreCompanyComponent}]},
  {path:"**" ,component:PageNotFoundComponent} 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
