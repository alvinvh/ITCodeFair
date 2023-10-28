import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserDashboardService {
    getUserDashboard() {
        let data = [
            { Doctor: 'Dr. Johnson Melbourne', Date: '1 Dec 2023, 9:00' },
            { Doctor: 'Dr. Johnson Melbourne', Date: '12 Dec 2023, 9:00' },
            { Doctor: 'Dr. Johnson Melbourne', Date: '14 Dec 2023, 9:00' },
            { Doctor: 'Dr. Addison Smith', Date: '13 Dec 2023, 9:00' },
            { Doctor: 'Dr. Daisy Gabriela', Date: '16 Dec 2023, 9:00' },
            { Doctor: 'Dr. Edie Dee', Date: '17 Dec 2023, 9:00' },
        ];
        return data;
    }
    getUserPrescription() {
        let dataPrescription = [
            {
                Date: '11 Nov 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Johnson Melbourne',
            },
            {
                Date: '1 Nov 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Ena Dicrosa',
            },
            {
                Date: '11 Dec 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Addison Smith',
            },
            {
                Date: '4 Nov 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Daisy Gabriela',
            },
            {
                Date: '11 Nov 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Johnson Melbourne',
            },
            {
                Date: '25 Jan 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Ronnie Aaron',
            },
            {
                Date: '23 Dec 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Johnson Melbourne',
            },
            {
                Date: '29 Sep 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Johnson Melbourne',
            },
            {
                Date: '5 Aug 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Edie Dee',
            },
            {
                Date: '11 Nov 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Addison Smith',
            },
            {
                Date: '6 Aug 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Edie Dee',
            },
            {
                Date: '23 Nov 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Sarah Taylor',
            },
            {
                Date: '8 Nov 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Sarah Taylor',
            },
            {
                Date: '11 Aug 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Aiken Ward',
            },
            {
                Date: '30 Nov 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Sarah Taylor',
            },
            {
                Date: '15 Dec 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Aiken Ward',
            },
            {
                Date: '12 Nov 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Babatunde Jon',
            },
            {
                Date: '26 Aug 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Addison Smith',
            },
            {
                Date: '24 Mar 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Daisy Gabriela',
            },
            {
                Date: '23 Dec 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Daisy Gabriela',
            },
            {
                Date: '22 Mar 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Babatunde Jon',
            },
            {
                Date: '12 Feb 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Ena Dicrosa',
            },
            {
                Date: '5 Nov 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Edie Dee',
            },
            {
                Date: '6 Nov 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Addison Smith',
            },
            {
                Date: '11 Feb 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Ena Dicrosa',
            },
            {
                Date: '3 Mar 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Sarah Taylor',
            },
            {
                Date: '8 Mar 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Babatunde Jon',
            },
            {
                Date: '29 Feb 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Ronnie Aaron',
            },
            {
                Date: '9 Nov 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Ena Dicrosa',
            },
            {
                Date: '3 Feb 2023',
                Name: 'Prescription',
                Doctor: 'Dr. Ronnie Aaron',
            },
        ];
        return dataPrescription;
    }
    getUserRecords() {
        let dataRecords = [
            {
                Name: 'Anthony Hawkins',
                Date: '11 Nov 2023',
                Description: 'Rapalac Neuronium',
                Doctor: 'Dr. Johnson Melbourne',
            },
            {
                Name: 'Anthony Hawkins',
                Date: '1 Nov 2023',
                Description: 'Ombinazol Bonibamol',
                Doctor: 'Dr. Ena Dicrosa',
            },
            {
                Name: 'Anthony Hawkins',
                Date: '11 Dec 2023',
                Description: 'Dantotate Dantodazole',
                Doctor: 'Dr. Addison Smith',
            },
            {
                Name: 'Anthony Hawkins',
                Date: '4 Nov 2023',
                Description: 'Benzaxapine Croplex',
                Doctor: 'Dr. Daisy Gabriela',
            },
        ];
        return dataRecords;
    }
    constructor() {}
}
