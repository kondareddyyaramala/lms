import { ApiService } from 'src/app/service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  isInvalidUser = false;
  loginForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password:  ['', [Validators.required, Validators.minLength(5)]]
    })
  }
 
  // Getter to access form control
  get myForm(){
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.isInvalidUser = false;
    if (!this.loginForm.valid) {
      return false;
    } else {
      this.apiService.authenticate(this.loginForm.value).subscribe(
        (res) => {
          if(res){
            // valid user
            // set the user details in the local storage
            localStorage.setItem("userData", JSON.stringify(res));
            this.router.navigate(['/my-page']);
          }
        }, (error) => {
          console.log(error);
        });
    }
  }

}
