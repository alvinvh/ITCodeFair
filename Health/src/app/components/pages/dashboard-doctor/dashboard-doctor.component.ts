import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DoctorsListService } from '../../services/doctors-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.scss']
})
export class DashboardDoctorComponent implements OnInit {
  menu = 'profile';
  id = parseInt(localStorage.getItem('id')!);
  doctorDetails : any;
  title = 'trial';
  header = ['a', 'b', 'c', 'd', 'e', 'f'];
  data = [
      { a: 1, b: 1, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 1, b: 1, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 1, b: 1, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
      { a: 2, b: 2, c: 3, d: 4, e: 5, f: 6123123123123123123 },
  ];
  constructor(private authService: AuthService, private doctorList: DoctorsListService, public router:Router) {  }
  logout() {
      this.authService.logout();
  }

  ngOnInit(){
    this.doctorList.getDoctor(this.id).subscribe((x)=>this.doctorDetails = x)
    console.log(this.doctorDetails)
  }
}
