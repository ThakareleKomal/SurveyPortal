import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SurveyorListComponent } from './surveyor-list/surveyor-list.component';
import { AddSurveyorComponent } from './add-surveyor/add-surveyor.component';
import { UpdateSurveyorComponent } from './update-surveyor/update-surveyor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { ListSurveyComponent } from './list-survey/list-survey.component';
import { UpdateSurveyComponent } from './update-survey/update-survey.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { ListTopicComponent } from './list-topic/list-topic.component';
import { UpdateTopicComponent } from './update-topic/update-topic.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { ListFeedbackComponent } from './list-feedback/list-feedback.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { LoginComponent } from './login/login.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { RegistrationComponent } from './registration/registration.component';
import { ParticipantHomeComponent } from './participant-home/participant-home.component';
import { SurveyorHomeComponent } from './surveyor-home/surveyor-home.component';
import { ViewSurveyComponent } from './view-survey/view-survey.component';
import { ViewTopicComponent } from './view-topic/view-topic.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SurveyorLoginComponent } from './surveyor-login/surveyor-login.component';
import { SurveyorRegistrationComponent } from './surveyor-registration/surveyor-registration.component';
import { SurveyorLoginSuccessComponent } from './surveyor-login-success/surveyor-login-success.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ParticipantFeedbackComponent } from './participant-feedback/participant-feedback.component';
import { ListOfSurveysComponent } from './list-of-surveys/list-of-surveys.component';



@NgModule({
  declarations: [
    AppComponent,
    SurveyorListComponent,
    AddSurveyorComponent,
    UpdateSurveyorComponent,
    AddSurveyComponent,
    ListSurveyComponent,
    UpdateSurveyComponent,
    AddTopicComponent,
    ListTopicComponent,
    UpdateTopicComponent,
    AddFeedbackComponent,
    ListFeedbackComponent,
    UpdateFeedbackComponent,
    AddQuestionComponent,
    ListQuestionComponent,
    LoginComponent,
    UpdateQuestionComponent,
    RegistrationComponent,
    ParticipantHomeComponent,
    SurveyorHomeComponent,
    ViewSurveyComponent,
    ViewTopicComponent,
    AboutusComponent,
    SurveyorLoginComponent,
    SurveyorRegistrationComponent,
    SurveyorLoginSuccessComponent,
    ListUserComponent,
    ParticipantFeedbackComponent,
    ListOfSurveysComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
