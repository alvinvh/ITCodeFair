import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsListService } from '../../services/doctors-list.service';

@Component({
    selector: 'app-doctor-details-page',
    templateUrl: './doctor-details-page.component.html',
    styleUrls: ['./doctor-details-page.component.scss'],
})
export class DoctorDetailsPageComponent implements OnInit {
    doctorID!: any;
    doctorDetails: any = '';
    constructor(
        private route: ActivatedRoute,
        private doctorList: DoctorsListService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.doctorID = this.route.snapshot.paramMap.get('id');
        this.doctorList
            .getDoctor(this.doctorID)
            .subscribe((x) => (this.doctorDetails = x));
    }
}
