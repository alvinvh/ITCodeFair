import { Component, OnInit } from '@angular/core';
import { DoctorsListService } from '../../services/doctors-list.service';

@Component({
  selector: 'app-doctors-page',
  templateUrl: './doctors-page.component.html',
  styleUrls: ['./doctors-page.component.scss']
})
export class DoctorsPageComponent implements OnInit {
  doctorList : any;
  constructor(doctorsList:DoctorsListService) {
    this.doctorList = doctorsList.getDoctorsList();
   }

  ngOnInit(): void {
  }

}
