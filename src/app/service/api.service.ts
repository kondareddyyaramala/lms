import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUri:string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create
  createUser(data): Observable<any> {
    let url = `${this.baseUri}/users`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  authenticate(request){
    return this.http.post(`${this.baseUri}/authenticate`, request)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  getAllBooks(userId = null): Observable<any>{
    let url = `${this.baseUri}/books`;
    if(userId){
      url += `?user_id=${userId}`;
    }
    return this.http.get(url)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  claimBook(data): Observable<any> {
    let url = `${this.baseUri}/books`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}