import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserCreateComponent } from './components/user-create/user-create.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule, MatTableModule, MatButtonModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

import { ApiService } from './service/api.service';
import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { MyPageComponent } from './components/my-page/my-page.component';
import { LogOutComponent } from './components/log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    BooksComponent,
    LoginComponent,
    MyPageComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }