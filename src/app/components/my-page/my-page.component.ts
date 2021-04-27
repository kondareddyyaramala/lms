import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
  userData =  null;
  books = [];
  constructor(private apiService: ApiService) { 
    this.userData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null;
  }

  ngOnInit() {
  }

}
