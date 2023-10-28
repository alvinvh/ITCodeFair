import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DoctorDashboardService {
    getDoctorDashboard() {
        let data = [
            {
                Name: 'Anthony Hawkins',
                Date: '27 Oct 2022',
                Description: 'Benzaxapine Croplex',
                By: 'Dr. Johnson Melbourne',
            },
            {
                Name: 'Madison Gregor',
                Date: '24 Oct 2022',
                Description: 'Benzaxapine Croplex',
                By: 'Dr. Babatunde Jon',
            },
            {
                Name: 'Anthony Hawkins',
                Date: '22 Oct 2022',
                Description: 'Benzaxapine Croplex',
                By: 'Dr. Ena Dicrosa',
            },
            {
                Name: 'Anthony Hawkins',
                Date: '28 Nov 2022',
                Description: 'Benzaxapine Croplex',
                By: 'Dr. Addison Smith',
            },
            {
                Name: 'Madison Gregor',
                Date: '1 Oct 2022',
                Description: 'Benzaxapine Croplex',
                By: 'Dr. Ena Dicrosa',
            },
            {
                Name: 'Nate Kessell',
                Date: '2 Dec 2022',
                Description: 'Rapalac Neuronium',
                By: 'Dr. Addison Smith',
            },
            {
                Name: 'Maddison Hebblethwaite',
                Date: '20 Dec 2022',
                Description: 'Rapalac Neuronium',
                By: 'Dr. Daisy Gabriela',
            },
            {
                Name: 'Maddison Hebblethwaite',
                Date: '19 Mar 2022',
                Description: 'Acetrace Amionel',
                By: 'Dr. Edie Dee',
            },
            {
                Name: 'Madison Gregor',
                Date: '2 Oct 2022',
                Description: 'Rapalac Neuronium',
                By: 'Dr. Ronnie Aaron',
            },
            {
                Name: 'Nate Kessell',
                Date: '4 Dec 2022',
                Description: 'Rapalac Neuronium',
                By: 'Dr. Daisy Gabriela',
            },
            {
                Name: 'Maddison Hebblethwaite',
                Date: '5 Jun 2022',
                Description: 'Rapalac Neuronium',
                By: 'Dr. Ronnie Aaron',
            },
            {
                Name: 'Maddison Hebblethwaite',
                Date: '14 Jul 2022',
                Description: 'Rapalac Neuronium',
                By: 'Dr. Ena Dicrosa',
            },
            {
                Name: 'Maddison Hebblethwaite',
                Date: '12 Oct 2022',
                Description: 'Acetrace Amionel',
                By: 'Dr. Aiken Ward',
            },
            {
                Name: 'Nate Kessell',
                Date: '6 Nov 2022',
                Description: 'Rapalac Neuronium',
                By: 'Dr. Ena Dicrosa',
            },
            {
                Name: 'Maddison Hebblethwaite',
                Date: '2 Nov 2022',
                Description: 'Rapalac Neuronium',
                By: 'Dr. Ronnie Aaron',
            },
            {
                Name: 'Madison Gregor',
                Date: '28 Jun 2022',
                Description: 'Rapalac Neuronium',
                By: 'Dr. Johnson Melbourne',
            },
            {
                Name: 'Maddison Hebblethwaite',
                Date: '28 Jul 2022',
                Description: 'Ombinazol Bonibamol',
                By: 'Dr. Daisy Gabriela',
            },
            {
                Name: 'Maddison Hebblethwaite',
                Date: '6 Apr 2022',
                Description: 'Ombinazol Bonibamol',
                By: 'Dr. Addison Smith',
            },
            {
                Name: 'Maddison Hebblethwaite',
                Date: '1 Oct 2022',
                Description: 'Ombinazol Bonibamol',
                By: 'Dr. Ena Dicrosa',
            },
            {
                Name: 'Nate Kessell',
                Date: '8 Dec 2022',
                Description: 'Ombinazol Bonibamol',
                By: 'Dr. Ronnie Aaron',
            },
            {
                Name: 'Maddison Hebblethwaite',
                Date: '23 Dec 2022',
                Description: 'Ombinazol Bonibamol',
                By: 'Dr. Addison Smith',
            },
            {
                Name: 'Mason Grattan',
                Date: '29 Sep 2022',
                Description: 'Ombinazol Bonibamol',
                By: 'Dr. Ena Dicrosa',
            },
            {
                Name: 'Nate Kessell',
                Date: '5 Oct 2022',
                Description: 'Ombinazol Bonibamol',
                By: 'Dr. Edie Dee',
            },
            {
                Name: 'Maddison Hebblethwaite',
                Date: '6 Oct 2022',
                Description: 'Dantotate Dantodazole',
                By: 'Dr. Edie Dee',
            },
            {
                Name: 'Nate Kessell',
                Date: '3 Oct 2022',
                Description: 'Dantotate Dantodazole',
                By: 'Dr. Johnson Melbourne',
            },
            {
                Name: 'Mason Grattan',
                Date: '23 Oct 2022',
                Description: 'Dantotate Dantodazole',
                By: 'Dr. Sarah Taylor',
            },
            {
                Name: 'Mason Grattan',
                Date: '29 Oct 2022',
                Description: 'Dantotate Dantodazole',
                By: 'Dr. Daisy Gabriela',
            },
            {
                Name: 'Maddison Hebblethwaite',
                Date: '1 Oct 2022',
                Description: 'Acetrace Amionel',
                By: 'Dr. Sarah Taylor',
            },
            {
                Name: 'Mason Grattan',
                Date: '2 Oct 2022',
                Description: 'Acetrace Amionel',
                By: 'Dr. Edie Dee',
            },
            {
                Name: 'Mason Grattan',
                Date: '2 Oct 2022',
                Description: 'Acetrace Amionel',
                By: 'Dr. Johnson Melbourne',
            },
        ];
        return data;
    }

    getDoctorAppointment(){
      let patients = [
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
      return patients
    }

    getDoctorPatient(){
      let patients = [
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
      return patients
    }
    constructor() {}
}
