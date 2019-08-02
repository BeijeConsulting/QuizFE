import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AdminLayoutComponent
=======
    SidebarComponent,
    LoginComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> 2fd240f8c678b9577bf32565a3bbb72e22dcb5b5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
