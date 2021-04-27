import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCreateComponent } from './components/user-create/user-create.component';
import { LoginComponent } from './components/login/login.component';
import { MyPageComponent } from './components/my-page/my-page.component';
import { CanActivateGuard } from './gaurds/can-activate.guard';
import { LogOutComponent } from './components/log-out/log-out.component';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogOutComponent},
  { path: 'create-user', component: UserCreateComponent },
  { path: 'my-page', component: MyPageComponent, canActivate: [CanActivateGuard]},
  { path: 'books', component: BooksComponent, canActivate: [CanActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }