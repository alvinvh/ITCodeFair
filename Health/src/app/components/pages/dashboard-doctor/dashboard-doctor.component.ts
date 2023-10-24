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
  header = ['Name', 'Date', 'Description', 'By'];
  data = [
      { Name: 'Anthony Hawkins', Date: '27 Oct 2022', Description: 'Benzaxapine Croplex', By: 'Dr. Johnson Melbourne'},
      { Name: 'Madison Gregor', Date: '24 Oct 2022', Description: 'Benzaxapine Croplex', By: 'Dr. Babatunde Jon'},
      { Name: 'Anthony Hawkins', Date: '22 Oct 2022', Description: 'Benzaxapine Croplex', By: 'Dr. Ena Dicrosa'},
      { Name: 'Anthony Hawkins', Date: '28 Nov 2022', Description: 'Benzaxapine Croplex', By: 'Dr. Addison Smith'},
      { Name: 'Madison Gregor', Date: '1 Oct 2022', Description: 'Benzaxapine Croplex', By: 'Dr. Ena Dicrosa'},
      { Name: 'Nate Kessell', Date: '2 Dec 2022', Description: 'Rapalac Neuronium', By: 'Dr. Addison Smith'},
      { Name: 'Maddison Hebblethwaite', Date: '20 Dec 2022', Description: 'Rapalac Neuronium', By: 'Dr. Daisy Gabriela'},
      { Name: 'Maddison Hebblethwaite', Date: '19 Mar 2022', Description: 'Acetrace Amionel', By: 'Dr. Edie Dee'},
      { Name: 'Madison Gregor', Date: '2 Oct 2022', Description: 'Rapalac Neuronium', By: 'Dr. Ronnie Aaron'},
      { Name: 'Nate Kessell', Date: '4 Dec 2022', Description: 'Rapalac Neuronium', By: 'Dr. Daisy Gabriela'},
      { Name: 'Maddison Hebblethwaite', Date: '5 Jun 2022', Description: 'Rapalac Neuronium', By: 'Dr. Ronnie Aaron'},
      { Name: 'Maddison Hebblethwaite', Date: '14 Jul 2022', Description: 'Rapalac Neuronium', By: 'Dr. Ena Dicrosa'},
      { Name: 'Maddison Hebblethwaite', Date: '12 Oct 2022', Description: 'Acetrace Amionel', By: 'Dr. Aiken Ward'},
      { Name: 'Nate Kessell', Date: '6 Nov 2022', Description: 'Rapalac Neuronium', By: 'Dr. Ena Dicrosa'},
      { Name: 'Maddison Hebblethwaite', Date: '2 Nov 2022', Description: 'Rapalac Neuronium', By: 'Dr. Ronnie Aaron'},
      { Name: 'Madison Gregor', Date: '28 Jun 2022', Description: 'Rapalac Neuronium', By: 'Dr. Johnson Melbourne'},
      { Name: 'Maddison Hebblethwaite', Date: '28 Jul 2022', Description: 'Ombinazol Bonibamol', By: 'Dr. Daisy Gabriela'},
      { Name: 'Maddison Hebblethwaite', Date: '6 Apr 2022', Description: 'Ombinazol Bonibamol', By: 'Dr. Addison Smith'},
      { Name: 'Maddison Hebblethwaite', Date: '1 Oct 2022', Description: 'Ombinazol Bonibamol', By: 'Dr. Ena Dicrosa'},
      { Name: 'Nate Kessell', Date: '8 Dec 2022', Description: 'Ombinazol Bonibamol', By: 'Dr. Ronnie Aaron'},
      { Name: 'Maddison Hebblethwaite', Date: '23 Dec 2022', Description: 'Ombinazol Bonibamol', By: 'Dr. Addison Smith'},
      { Name: 'Mason Grattan', Date: '29 Sep 2022', Description: 'Ombinazol Bonibamol', By: 'Dr. Ena Dicrosa'},
      { Name: 'Nate Kessell', Date: '5 Oct 2022', Description: 'Ombinazol Bonibamol', By: 'Dr. Edie Dee'},
      { Name: 'Maddison Hebblethwaite', Date: '6 Oct 2022', Description: 'Dantotate Dantodazole', By: 'Dr. Edie Dee'},
      { Name: 'Nate Kessell', Date: '3 Oct 2022', Description: 'Dantotate Dantodazole', By: 'Dr. Johnson Melbourne'},
      { Name: 'Mason Grattan', Date: '23 Oct 2022', Description: 'Dantotate Dantodazole', By: 'Dr. Sarah Taylor'},
      { Name: 'Mason Grattan', Date: '29 Oct 2022', Description: 'Dantotate Dantodazole', By: 'Dr. Daisy Gabriela'},
      { Name: 'Maddison Hebblethwaite', Date: '1 Oct 2022', Description: 'Acetrace Amionel', By: 'Dr. Sarah Taylor'},
      { Name: 'Mason Grattan', Date: '2 Oct 2022', Description: 'Acetrace Amionel', By: 'Dr. Edie Dee'},
      { Name: 'Mason Grattan', Date: '2 Oct 2022', Description: 'Acetrace Amionel', By: 'Dr. Johnson Melbourne'},
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
