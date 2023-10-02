import { Component, OnInit, TemplateRef } from '@angular/core';
import { DoctorsListService } from '../../services/doctors-list.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
    selector: 'app-appointment-doctor',
    templateUrl: './appointment-doctor.component.html',
    styleUrls: ['./appointment-doctor.component.scss'],
})
export class AppointmentDoctorComponent implements OnInit {
    selectedDoctor = NaN ;
    doctor: any;
    modalRef!: BsModalRef;
    doctorLists:any;
    constructor(private doctorList: DoctorsListService, private modalService: BsModalService) {}
    ngOnInit(): void {
      this.doctorLists = this.doctorList.getDoctorsList()
        if (this.selectedDoctor) {
            this.DoctorDetails(this.selectedDoctor);
        }
    }
    DoctorDetails(id: number) {
        for (let doctor of this.doctorList.getDoctorsList()) {
            if (doctor.id === Number(this.selectedDoctor)) {
                this.doctor = doctor;
            }
        }
    }

    openDoctorDialog(template: TemplateRef<any>){
      this.modalRef = this.modalService.show(template, { class: 'modal-lg' });

    }
}
