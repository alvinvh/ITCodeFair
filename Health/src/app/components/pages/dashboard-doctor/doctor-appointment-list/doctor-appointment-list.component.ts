import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-appointment-list',
  templateUrl: './doctor-appointment-list.component.html',
  styleUrls: ['./doctor-appointment-list.component.scss']
})
export class DoctorAppointmentListComponent {
  patients = [
    {
      patientId: 1,
      patientName: 'Anthony Hawkins',
      time: '15 Nov 2023, 09:00',
      patientEmail: 'Anthony.Hawkins@email.com',
      phoneNumber: '0441231239',
      image_url: 'user-1.jpg'
    },
    {
      patientId: 2,
      patientName: 'Madison Gregor',
      time: '20 Nov 2023, 12:30',
      patientEmail: 'Madison.Gregor@email.com',
      phoneNumber: '0412390739',
      image_url: 'user-2.jpg'
    },
    {
      patientId: 3,
      patientName: 'Nate Kessell',
      time: '20 Nov 2023, 15:00',
      patientEmail: 'Nate.Kessel@email.com',
      phoneNumber: '0446571239',
      image_url: 'user-3.jpg'
    },
    {
      patientId: 4,
      patientName: 'Mason Grattan',
      time: '23 Nov 2023, 14:00',
      patientEmail: 'Mason.Grattan@email.com',
      phoneNumber: '0423531239',
      image_url: 'user-4.jpg'
    },
    {
      patientId: 5,
      patientName: 'Maddison Hebblethwaite',
      time: '24 Nov 2023, 14:30',
      patientEmail: 'Maddison.Hebblethwaite@gmail.com',
      phoneNumber: '0441231239',
      image_url: 'user-5.jpg'
    }
  ];
}
