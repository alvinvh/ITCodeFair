import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-patient-list',
  templateUrl: './doctor-patient-list.component.html',
  styleUrls: ['./doctor-patient-list.component.scss']
})
export class DoctorPatientListComponent {
  patients = [
    {
      patientId: 1,
      patientName: 'Anthony Hawkins',
      gender: 'Male',
      patientEmail: 'Anthony.Hawkins@email.com',
      phoneNumber: '0441231239',
      image_url: 'user-1.jpg'
    },
    {
      patientId: 2,
      patientName: 'Madison Gregor',
      gender: 'Female',
      patientEmail: 'Madison.Gregor@email.com',
      phoneNumber: '0412390739',
      image_url: 'user-2.jpg'
    },
    {
      patientId: 3,
      patientName: 'Nate Kessell',
      gender: 'Male',
      patientEmail: 'Nate.Kessel@email.com',
      phoneNumber: '0446571239',
      image_url: 'user-3.jpg'
    },
    {
      patientId: 4,
      patientName: 'Mason Grattan',
      gender: 'Male',
      patientEmail: 'Mason.Grattan@email.com',
      phoneNumber: '0423531239',
      image_url: 'user-4.jpg'
    },
    {
      patientId: 5,
      patientName: 'Maddison Hebblethwaite',
      gender: 'Female',
      patientEmail: 'Maddison.Hebblethwaite@gmail.com',
      phoneNumber: '0441231239',
      image_url: 'user-5.jpg'
    }
  ];
    
  }

