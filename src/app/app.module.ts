import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { arrRouting } from './app.routing';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuizComponent } from './quiz/quiz.component';
import { NotesComponent } from './notes/notes.component';
import { NotificationComponent } from './notification/notification.component';
import { HomeworkComponent } from './homework/homework.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AttendanceComponent } from './attendance/attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    QuizComponent,
    NotesComponent,
    NotificationComponent,
    HomeworkComponent,
    PageNotFoundComponent,
    SideBarComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    arrRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
