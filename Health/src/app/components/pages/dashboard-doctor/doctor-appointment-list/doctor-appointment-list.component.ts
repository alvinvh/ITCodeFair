import { Component } from '@angular/core';
import { DoctorDashboardService } from 'src/app/components/services/doctor-dashboard.service';

@Component({
  selector: 'app-doctor-appointment-list',
  templateUrl: './doctor-appointment-list.component.html',
  styleUrls: ['./doctor-appointment-list.component.scss']
})
export class DoctorAppointmentListComponent {
  patients = this.doctorAppointment.getDoctorAppointment()
  constructor(public doctorAppointment: DoctorDashboardService){}
}
