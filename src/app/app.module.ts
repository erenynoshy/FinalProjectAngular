import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FileSaverModule } from 'ngx-filesaver';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
// import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
// import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
// import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import {CourseListComponent} from './course-list/course-list.component';


import {AddMaterialComponent} from './add-material/add-material.component'
import {EnrollKeyComponent} from './enroll-key/enroll-key.component'
// import { FontAwesomeModule } from '@fontawesome/angular-fontawesome'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WhyAcadWorksComponent } from './why-acad-works/why-acad-works.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';
import { FooterComponent } from './footer/footer.component';
// import { AddCourseComponent } from './add-course/add-course.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { AboutOurUnivComponent } from './about-our-univ/about-our-univ.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
// import {} from '';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {MangeStudentComponent} from './mange-student/mange-student.component';
import {MatrialBoxComponent} from './matrial-box/matrial-box.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {SubmitTaskComponent} from './components/TaskComponents/submit-task/submit-task.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { register } from 'ts-node';
import { ExploreCoursesComponent } from '../app/components/explore-courses/explore-courses.component';
import { RegisterComponent } from './register/register.component'
import { from } from 'rxjs';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CompCourseComponent } from './comp-course/comp-course.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ReactiveFormsModule } from '@angular/forms';
//////////////

//importing the services
import {AuthenticationService} from '../Services/Authentication/authentication.service';
import {TokeninterceptService} from '../Services/TokenInterceptor/tokenintercept.service';
import {BranchService} from '../Services/BranchService/branch.service';
import {TaskService} from '../Services/TaskService/task.service';
import {TrackService} from '../Services/TrackService/track.service';
import { AddTaskFormComponent } from './components/TaskComponents/add-task-form/add-task-form.component';
import { EditTaskFormComponent } from './components/TaskComponents/edit-task-form/edit-task-form.component';
import { TaskDetailsComponent } from './components/TaskComponents/task-details/task-details.component';
import { TaskCardComponent } from './components/TaskComponents/task-card/task-card.component';

import { AdminSideBarComponent } from './components/admindashboard/admin-side-bar/admin-side-bar.component';
import { AdminDashboardComponent } from './components/AdminDashboard/admin-dashboard/admin-dashboard.component';
import { AddBranchComponent } from './components/AdminDashboard/branch/add-branch/add-branch.component';
import { AllBranchComponent } from './components/AdminDashboard/branch/all-branch/all-branch.component';
import { EditTrackComponent } from './components/admindashboard/track/edit-track/edit-track.component';
import { AddTrackComponent } from './components/admindashboard/track/add-track/add-track.component';
import { AllTracksComponent } from './components/admindashboard/track/all-tracks/all-tracks.component';
import { AllInstructorsComponent } from './components/admindashboard/instructor/all-instructors/all-instructors.component';
import { AddInstructorsComponent } from './components/admindashboard/instructor/add-instructors/add-instructors.component';
import { EditInstructorsComponent } from './components/admindashboard/instructor/edit-instructors/edit-instructors.component';
import { DashboardComponent } from './components/adminDashboard/dashboard/dashboard.component';
/////////////////////
import { ChartsModule } from 'ng2-charts';
import { EditBranchComponent } from './components/AdminDashboard/branch/edit-branch/edit-branch.component';

import { ProjectDetailsComponent } from './components/ProjectManagementComponents/project-details/project-details.component';
import { ColaboratorListComponent } from './components/ProjectManagementComponents/colaborator-list/colaborator-list.component';
import { ProjectDetailsFormComponent } from './components/ProjectManagementComponents/project-details-form/project-details-form.component';
import { ProjectMaterialListComponent } from './components/ProjectManagementComponents/project-material-list/project-material-list.component';
import { ProjectsListComponent } from './components/ProjectManagementComponents/projects-list/projects-list.component';
import { ProjectCardComponent } from './components/ProjectManagementComponents/project-card/project-card.component';
import { ProjectsMaterialItemComponent } from './components/ProjectManagementComponents/projects-material-item/projects-material-item.component';
import { ColabboratorItemComponent } from './components/ProjectManagementComponents/colabborator-item/colabborator-item.component';
import { TaskSolutionComponent } from './components/TaskComponents/task-solution/task-solution.component';
import { EditTasksolutionComponent } from './components/TaskComponents/edit-tasksolution/edit-tasksolution.component';
import { DeleteTasksolutionComponent } from './components/TaskComponents/delete-tasksolution/delete-tasksolution.component';
import { CreateProjectComponent } from './components/ProjectManagementComponents/create-project/create-project.component';
import { UpdateProjectComponent } from './components/ProjectManagementComponents/update-project/update-project.component';
import { ExploreProjectsComponent } from './components/ProjectManagementComponents/explore-projects/explore-projects.component';

import { ExploreDetailsComponent } from './components/ProjectManagementComponents/explore-details/explore-details.component';

import { PopularProjectComponent } from './popular-project/popular-project/popular-project.component';
import { AddIntakeComponent } from './components/admindashboard/intake/add-intake/add-intake.component';
import { AllIntakeComponent } from './components/admindashboard/intake/all-intake/all-intake.component';

import { ExploreTeamsComponent } from './components/ProjectManagementComponents/explore-teams/explore-teams.component';

import { UpdateCourseComponent } from './update-course/update-course.component';
import { TaskSolutionListComponent } from './components/TaskComponents/task-solution-list/task-solution-list.component';
import { EditComponent } from './components/admindashboard/branch/edit/edit.component';
import { CourseMaterialService } from 'src/Services/course-material.service';
import { ExploreCourseDetailsComponent } from './components/explore-course-details/explore-course-details.component';




//for the require keyword
declare var require: any;
@NgModule({
  declarations: [
    AddMaterialComponent,
    EnrollKeyComponent,
    SubmitTaskComponent,
    StudentDetailsComponent,
    MatrialBoxComponent,
    MangeStudentComponent,
    EditProfileComponent,
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    WhyAcadWorksComponent,
    PopularCoursesComponent,
    FooterComponent,
    CourseListComponent,
    UpdateCourseComponent,
    CourseCardComponent,
    CourseListComponent,
    AboutOurUnivComponent,
    CarouselComponent,
    AboutComponent,
    LoginComponent,

    ProfileComponent,
    ContactComponent,
    ExploreCoursesComponent,
    RegisterComponent,
    AddCoursesComponent,
    CourseComponent,
    CourseDetailsComponent,
    AddTaskFormComponent,
    EditTaskFormComponent,
    TaskDetailsComponent,
    TaskCardComponent,

    AdminSideBarComponent,
    AddBranchComponent,
    AllBranchComponent,
    EditTrackComponent,
    AddTrackComponent,
    AllTracksComponent,
    AllInstructorsComponent,
    AddInstructorsComponent,
    EditInstructorsComponent,
    DashboardComponent,

    ProjectDetailsComponent,
    ColaboratorListComponent,
    ProjectDetailsFormComponent,
    ProjectMaterialListComponent,
    ProjectsListComponent,
    ProjectCardComponent,
    ProjectsMaterialItemComponent,
    ColabboratorItemComponent,

    TaskSolutionComponent,
    EditTasksolutionComponent,
    DeleteTasksolutionComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    ExploreProjectsComponent,

    ExploreDetailsComponent,

    AddIntakeComponent,
    AllIntakeComponent,

    ExploreTeamsComponent,

    TaskSolutionListComponent,

    EditComponent,

    ExploreCourseDetailsComponent,



  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxFileDropModule,
    ReactiveFormsModule,
    ChartsModule,
    // ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
     
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'course', component: CourseComponent },
      { path: 'course/add', component: AddCoursesComponent },
      { path: 'course/student', component: MangeStudentComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'Task/Add/:CourseId', component: AddTaskFormComponent },
      { path: 'Task/Edit/:TaskId', component: EditTaskFormComponent },
      { path: 'admin', component:DashboardComponent},
      { path: 'student/details', component: StudentDetailsComponent},
      { path: 'explore/courses', component: ExploreCoursesComponent },
      { path: 'explore/project', component: ExploreProjectsComponent },
      { path: 'admin/intake', component: AllIntakeComponent },
      { path: 'course/details/:CourseId', component: CourseDetailsComponent },
      { path: 'admin/tracks', component: AllTracksComponent},
      { path: 'admin/branches', component: AllBranchComponent },
      { path: 'admin/instructors', component: AllInstructorsComponent },
      { path: 'track/edit', component: EditTrackComponent },
      { path: 'branch/edit', component: EditComponent},
      { path: 'Explore/Courses/Details/:couseId', component: ExploreCourseDetailsComponent },
      { path: 'Project', component: ProjectsListComponent },
      { path: 'Project/Details/:ProjectId', component: ProjectDetailsComponent },

      { path: 'course/details', component: CourseDetailsComponent },
      { path: 'explore/project/details/:ProjectId', component: ExploreDetailsComponent },

      

      // { path: 'course/details', component: CourseDetailsComponent },

      
  

    ]),
    NgbModule,
    FileSaverModule 
  ],
  providers: [
    AuthenticationService,
    TrackService,
    BranchService,
    TaskService,
    CourseMaterialService,
{
  provide:HTTP_INTERCEPTORS,
  useClass:TokeninterceptService,
  multi:true
}
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
