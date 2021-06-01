import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule, HttpClient} from '@angular/common/http'; 
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { LognInComponent } from './components/Login/logn-in/logn-in.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { LoginService } from './services/login.service';
import { AuthenticationGuardService } from './services/Auth/authentication-guard.service';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { StudentsProfileSubmittedComponent } from './components/students-profile-submitted/students-profile-submitted.component';
import { ManageStudentsComponent } from './components/AdminDash-board/manage-students/manage-students.component';
import { AllCompanyComponent } from './components/AdminDash-board/all-company/all-company.component';
import { AllJobsComponent } from './components/AdminDash-board/all-jobs/all-jobs.component';
import { AllEventComponent } from './components/AdminDash-board/all-event/all-event.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarCompanyComponent } from './components/navbar-company/navbar-company.component';
import { ViewSProfileComponent } from './components/view-sprofile/view-sprofile.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { HomeComponent } from './components/home/home/home.component';
import { HomeCompanyComponent } from './components/home-page-company/home-company/home-company.component';
import { JObDetailsComponent } from './components/job-details/job-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostJobComponent } from './components/postjob/post-job/post-job.component';
import { SliderComponent } from './components/slider/slider.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile/company-profile.component';
import { EditCompanyProfileComponent } from './components/edit-company-profile/edit-company-profile/edit-company-profile.component';
import { CompanyService } from './services/Company/company.service';
import { JOBService } from './services/job.service';
import { StudentServiseService } from './services/student/student-servise.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserServService } from './services/User/user-serv.service';
import { SockectIoService } from './services/socket .io/sockect-io.service';
import { ViewSComponent } from './components/view-s/view-s.component';
import { ViewCComponent } from './view-c/view-c.component';
import { AllCompanyrequistComponent } from './components/AdminDash-board/all-companyRequist/all-companyrequist/all-companyrequist.component';
import { ReadMoreComponent } from './components/ReadMore/read-more/read-more.component';
import { SavedJobComponent } from './saved-job/saved-job.component';
import { SavedJobService } from './services/savedJOB/saved-job.service';
import { MessageCompanyComponent } from './components/messagesCompany/message-company/message-company.component';
import { ReadMoreCompanyComponent } from './components/ReadMoreCompany/read-more-company/read-more-company.component';
import { PageNotFoundComponent } from './components/PageNotFound/page-not-found/page-not-found.component';
import { CarouselModule } from 'ngx-carousel-lib';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { MessagesComponent } from './components/messages/messages.component';
import { StudentVIEWWComponent } from './components/studentVIEW/student-vieww/student-vieww.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    LognInComponent,
    NavBarComponent,
    StudentProfileComponent,
    HomeComponent,
    HomeCompanyComponent,
    JObDetailsComponent,
    FooterComponent,
    HomeCompanyComponent,
    PostJobComponent,
    SliderComponent,
    ListJobsComponent,
    StudentsProfileSubmittedComponent,
    ManageStudentsComponent,
    AllCompanyComponent,
    AllJobsComponent,
    AllEventComponent,
    NavbarComponent,
    NavbarCompanyComponent,
    ViewSProfileComponent,
    AdminNavbarComponent,
    AddUsersComponent,
    HomeComponent,
    HomeCompanyComponent,
    JObDetailsComponent,
    FooterComponent,
    HomeCompanyComponent,
    PostJobComponent,
    SliderComponent,
    AddEventComponent,
    PostJobComponent,
    CompanyProfileComponent,
    EditCompanyProfileComponent,
    ViewSComponent,
    ViewCComponent,
    AllCompanyrequistComponent,
    MessagesComponent,
    ReadMoreComponent,
    SavedJobComponent,
    MessageCompanyComponent,
    ReadMoreCompanyComponent,
    PageNotFoundComponent,
    StudentVIEWWComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    CarouselModule,
    // CarouselModule
    
  ],
  providers: [
    AuthenticationGuardService,
    LoginService,
    CompanyService,
    JOBService,
    StudentServiseService,
    UserServService,
    SockectIoService,
    SavedJobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
