import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home-component/home.component';
import { HomeNavbarComponent } from './home/home-navbar-component/home-navbar.component';
import { CourseComponent } from './course/course/course.component';
import { CourseNavbarComponent } from './course/course-navbar/course-navbar.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseListItemComponent } from './course/course-list/course-list-item/course-list-item.component';
import {CoursesService} from './course/courses.service';
import { ResourcesComponent } from './course/course/resources/resources.component';
import { CourseDashboardComponent } from './course/course/course-dashboard/course-dashboard.component';
import { CourseAnnouncementsComponent } from './course/course-announcements/course-announcements.component';
import { HomeAnnouncementListItemComponent } from './home/home-announcement-list/home-announcement-list-item/home-announcement-list-item.component';
import { HomeAnnouncementListComponent } from './home/home-announcement-list/home-announcement-list.component';
import { LoginComponent } from './auth/login/login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ResourcesTableComponent } from './course/course/resources/resources-table/resources-table.component';
import { InstructorComponent } from './instructor/instructor/instructor.component';
import { InstructorNavbarComponent } from './instructor/instructor-navbar/instructor-navbar.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { NotAuthorizedComponent } from './auth/auth-errors/not-authorized/not-authorized.component';
import { InstructorDashboardComponent } from './instructor/instructor-dashboard/instructor-dashboard.component';
import { InstructorCourseListComponent } from './instructor/instructor-course-list/instructor-course-list.component';
import { InstructorCourseListItemComponent } from './instructor/instructor-course-list/instructor-course-list-item/instructor-course-list-item.component';
import { InstructorProfileComponent } from './instructor/instructor-profile/instructor-profile.component';
import { InstructorAnnouncementsComponent } from './instructor/instructor-announcements/instructor-announcements.component';
import { InstructorCoursesComponent } from './instructor/instructor-courses/instructor-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavbarComponent,
    CourseComponent,
    CourseNavbarComponent,
    CourseListComponent,
    CourseListItemComponent,
    ResourcesComponent,
    CourseDashboardComponent,
    CourseAnnouncementsComponent,
    HomeAnnouncementListItemComponent,
    HomeAnnouncementListComponent,
    LoginComponent,
    ResourcesTableComponent,
    InstructorComponent,
    InstructorNavbarComponent,
    StudentHomeComponent,
    NotAuthorizedComponent,
    InstructorDashboardComponent,
    InstructorCourseListComponent,
    InstructorCourseListItemComponent,
    InstructorProfileComponent,
    InstructorAnnouncementsComponent,
    InstructorCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
