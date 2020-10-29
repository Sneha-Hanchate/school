
import { RouterModule, Routes } from '@angular/router';

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

const arr: Routes =[
    { path: '', component: HomeComponent},
    { path: 'header', component: HeaderComponent},
    { path: 'footer', component: FooterComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'notes', component: NotesComponent },
    { path: 'notification', component: NotificationComponent },
    { path: 'homework', component: HomeworkComponent },
    { path: 'side-bar', component: SideBarComponent },
    { path: 'attendance', component: AttendanceComponent },

    { path: 'page-not-found', component: PageNotFoundComponent},

    { path: '**', redirectTo: 'page-not-found'},


];

export const arrRouting= RouterModule.forRoot(arr);
