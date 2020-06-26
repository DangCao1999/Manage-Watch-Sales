import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxImageZoomModule } from 'ngx-image-zoom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';




import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartLineComponent } from './components/chart-line/chart-line.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ListitemComponent } from './components/dashboard/listitem/listitem.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DialogadditemComponent } from './components/dashboard/dialogadditem/dialogadditem.component';
import { DialogdeleteitemComponent } from './components/dashboard/dialogdeleteitem/dialogdeleteitem.component';
import { WatchvidComponent } from './components/watchvid/watchvid.component';
import { DialogadduserComponent } from './components/side-nav/dialogadduser/dialogadduser.component';
import { LoginGuard } from './guard/loginguard';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UsergoogleService } from './service/usergoogle.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard]},
  {path: "watch/:id", component: WatchvidComponent, canActivate: [LoginGuard]}
];
@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    LoginComponent,
    ChartLineComponent,
    ListitemComponent,
    SideNavComponent,
    DialogadditemComponent,
    DialogdeleteitemComponent,
    WatchvidComponent,
    DialogadduserComponent,
  ],
  imports: [
    MatProgressBarModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    NgxImageZoomModule,
  ],
  providers: [UsergoogleService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
