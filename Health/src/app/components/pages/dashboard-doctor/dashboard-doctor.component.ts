import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DoctorsListService } from '../../services/doctors-list.service';
import { Router } from '@angular/router';
import { DoctorDashboardService } from '../../services/doctor-dashboard.service';

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.scss']
})
export class DashboardDoctorComponent implements OnInit {
  menu = 'profile';
  id = parseInt(localStorage.getItem('id')!);
  doctorDetails : any;
  header = ['Name', 'Date', 'Description', 'By'];
  data = this.doctorDashboard.getDoctorDashboard()
  
  constructor(private authService: AuthService, private doctorList: DoctorsListService, public router:Router, public doctorDashboard: DoctorDashboardService) {  }
  logout() {
      this.authService.logout();
  }

  ngOnInit(){
    this.doctorList.getDoctor(this.id).subscribe((x)=>this.doctorDetails = x)
    console.log(this.doctorDetails)
  }
}
