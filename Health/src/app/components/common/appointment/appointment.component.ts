import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DoctorsListService } from '../../services/doctors-list.service';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit{
    @Input() selectedDoctor = NaN;
    doctor: any;
    modalRef!: BsModalRef;
    doctorLists:any;
    mytime: Date = new Date();
    mindate = new Date();
    selectedTime = '';
    form!:FormGroup;
    timeList = [
        {'time':'9:00','availability': true},
        {'time':'9:30','availability': true},
        {'time':'10:00','availability': true},
        {'time':'10.30','availability': true},
        {'time':'11:00','availability': true},
        {'time':'11:30','availability': true},
        {'time':'12:00','availability': true},
        {'time':'12:30','availability': true},
        {'time':'13:00','availability': true},
        {'time':'13:30','availability': true},
        {'time':'14:00','availability': true},
        {'time':'14:30','availability': true},
        {'time':'15:00','availability': true},
        {'time':'15:30','availability': true},
        {'time':'16:00','availability': true},
        {'time':'16:30','availability': true},
    ];

    constructor(public router: Router, private fb:FormBuilder, private doctorList: DoctorsListService, private modalService: BsModalService, private activatedRoute: ActivatedRoute,) {
        this.form = this.fb.group({
            Name:['',[Validators.required]],
            Email:['',[Validators.required, Validators.email]],
            Phone:['',[Validators.required]],
            Date:['',[Validators.required]],
            Time:['',[Validators.required]],
            Message:['',[Validators.required]],
            Doctor:['',[Validators.required]]
        })
        
    };

    addAppointment(){
        console.log(this.form.value);
        this.selectedTime = '';
        this.form.reset();
    }
    
    setTime(time:any){
        this.form.patchValue({ Time: time});
        this.selectedTime = time; 
    }

    ngOnInit(): void {
        this.doctorLists = this.doctorList.getDoctorsList()
        if (this.selectedDoctor) {
            this.activatedRoute.params.subscribe((params) => {
                this.selectedDoctor = params['id'];
                this.DoctorDetails(Number(this.selectedDoctor));
        });
    }}

    DoctorDetails(id: number) {
        for (let doctor of this.doctorList.getDoctorsList()) {
            if (doctor.id === id) {
                this.doctor = doctor;
                this.form.patchValue({Doctor: id})
            }
        }
    }

    openDoctorDialog(template: TemplateRef<any>){
      this.modalRef = this.modalService.show(template, { class: 'modal-lg' });

    }
}
