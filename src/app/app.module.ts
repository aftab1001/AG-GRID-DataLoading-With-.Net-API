import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule } from '@angular/http'
import {
  FormsModule,ReactiveFormsModule
} from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";
import { AgGridModule } from 'ag-grid-angular';
import { RestApiService } from './providers/base.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule,MatDatepickerModule,MatNativeDateModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material'; 
import { TaskListDetail } from './providers/task-list.service'; 
 Dashboard 
import { Home } from './components/Home/home.component';
import { Header } from './components/Header/header.component';
import { Dashboard } from './components/Dashboard/dashboard.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { PageNotFound } from './components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
 
  { path: 'Home', component: Home, data: { title: 'Dashboard' } },
  { path: 'Dashboard', component: Dashboard, data: { title: 'Dashboard' } },
  { path: 'Dashboard-2', component: PageNotFound, data: { title: 'Dashboard 2' } },
  { path: 'Userprofile', component: PageNotFound, data: { title: 'User Profile' } },
  { path: '', component: Home, data: { title: 'Home' } },
  { path: '*', component: PageNotFound, data: { title: 'Home' } }
];
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    Home,
    Header,
    Dashboard,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  providers: [RestApiService,TaskListDetail],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
