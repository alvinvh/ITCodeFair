import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.scss']
})
export class AppointmentPageComponent implements OnInit {
  doctorID:any;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.doctorID = this.route.snapshot.paramMap.get('id');
  }
  
}
