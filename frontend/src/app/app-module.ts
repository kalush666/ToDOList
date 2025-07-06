import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    App,
    LoginComponent,
    SignUpComponent,
    TasksComponent,
    TaskComponent,
    EditTaskComponent,
    AddTaskComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
  bootstrap: [App],
})
export class AppModule {}
