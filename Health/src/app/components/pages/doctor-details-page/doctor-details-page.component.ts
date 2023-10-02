import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsListService } from '../../services/doctors-list.service';

@Component({
  selector: 'app-doctor-details-page',
  templateUrl: './doctor-details-page.component.html',
  styleUrls: ['./doctor-details-page.component.scss']
})
export class DoctorDetailsPageComponent implements OnInit {
  doctorID! : any;
  doctorDetails: any = '';
  constructor(private route: ActivatedRoute,private doctorList: DoctorsListService,private router:Router) {
  }
  

  ngOnInit(): void {
    this.doctorID = this.route.snapshot.paramMap.get('id');
    for (let doctor of this.doctorList.getDoctorsList()){
      if(doctor.id === Number(this.doctorID)){
        this.doctorDetails = doctor;
      }
    }
    if (this.doctorDetails === ''){
      this.router.navigate(['**']);
    }
    
  }

}
