import { Component } from '@angular/core';
import { DoctorDashboardService } from 'src/app/components/services/doctor-dashboard.service';

@Component({
  selector: 'app-doctor-patient-list',
  templateUrl: './doctor-patient-list.component.html',
  styleUrls: ['./doctor-patient-list.component.scss']
})
export class DoctorPatientListComponent {
  patients = this.doctorPatient.getDoctorPatient()
    constructor(public doctorPatient:DoctorDashboardService){}
  }

