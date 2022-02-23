import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { AddSurveyorComponent } from './add-surveyor/add-surveyor.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { AppComponent } from './app.component';
import { ListFeedbackComponent } from './list-feedback/list-feedback.component';
import { ListOfSurveysComponent } from './list-of-surveys/list-of-surveys.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { ListSurveyComponent } from './list-survey/list-survey.component';
import { ListTopicComponent } from './list-topic/list-topic.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { ParticipantFeedbackComponent } from './participant-feedback/participant-feedback.component';
import { ParticipantHomeComponent } from './participant-home/participant-home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SurveyorHomeComponent } from './surveyor-home/surveyor-home.component';
import { SurveyorListComponent } from './surveyor-list/surveyor-list.component';
import { SurveyorLoginSuccessComponent } from './surveyor-login-success/surveyor-login-success.component';
import { SurveyorLoginComponent } from './surveyor-login/surveyor-login.component';
import { SurveyorRegistrationComponent } from './surveyor-registration/surveyor-registration.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { UpdateSurveyComponent } from './update-survey/update-survey.component';
import { UpdateSurveyorComponent } from './update-surveyor/update-surveyor.component';
import { UpdateTopicComponent } from './update-topic/update-topic.component';
import { ViewSurveyComponent } from './view-survey/view-survey.component';
import { ViewTopicComponent } from './view-topic/view-topic.component';

const routes: Routes = [
{ path: 'survey', component: ListSurveyComponent },
{ path: 'addSurvey', component: AddSurveyComponent },
{ path:'updateSurvey/:id', component:UpdateSurveyComponent},
{ path: 'question', component: ListQuestionComponent },
{ path: 'addQuestion', component: AddQuestionComponent },
{ path:'updateQuestion/:id', component:UpdateQuestionComponent},
{ path: 'feedback', component: ListFeedbackComponent },
{ path: 'addFeedback', component: AddFeedbackComponent },
{ path: 'updateFeedback/:id', component: UpdateFeedbackComponent},
{ path: 'topic', component: ListTopicComponent },
{ path: 'addTopic', component: AddTopicComponent },
{ path: 'updateTopics/:id', component: UpdateTopicComponent},
{ path: 'surveyors', component: SurveyorListComponent },
{ path: 'add', component: AddSurveyorComponent },
{ path:'update-surveyor/:id', component:UpdateSurveyorComponent},
{ path:'registration',component:RegistrationComponent},
{ path:'login',component:LoginComponent},
{ path:'phome', component:ParticipantHomeComponent},
{ path: 'viewsurvey', component: ViewSurveyComponent},
{ path:'viewtopic', component: ViewTopicComponent},
{ path: 'aboutus', component:AboutusComponent},
{ path:'loginsuccess',component:SurveyorLoginSuccessComponent},
{ path:'Surveyorregister',component:SurveyorRegistrationComponent},
{ path:'Surveyorlogin',component:SurveyorLoginComponent},
{ path: 'surveyorhome', component:SurveyorHomeComponent},
{ path :'listuser', component:ListUserComponent},
{ path :'submit', component: ParticipantFeedbackComponent},
{ path:'list', component:ListOfSurveysComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
