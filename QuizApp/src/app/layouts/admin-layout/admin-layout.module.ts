import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AdminComponent } from '../../admin/admin.component';
import { SearchQuestionsComponent } from '../../search-questions/search-questions.component';



import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { LoginComponent } from 'app/login/login.component';
import {NewQuestionComponent} from '../../new-question/new-question.component';
import {UserQuizComponent} from '../../user-quiz/user-quiz.component';
import {UserActiveComponent} from '../../user-active/user-active.component';
import {UserCompletedComponent} from '../../user-completed/user-completed.component';
import {UserComponent} from '../../user/user.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    AdminComponent,
      NewQuestionComponent,
      UserQuizComponent,
      UserActiveComponent,
      UserCompletedComponent,
      UserComponent,
      SearchQuestionsComponent
  ]
})

export class AdminLayoutModule {}
