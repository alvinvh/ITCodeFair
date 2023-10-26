import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    NgForm,
    RequiredValidator,
    Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DoctorsListService } from '../../services/doctors-list.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Observable, map, max, min } from 'rxjs';
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
    @Input() selectedDoctor = null;
    doctor: any = '';
    modalRef!: BsModalRef;
    doctorLists: any;
    minDate = new Date();
    maxDate = new Date(this.minDate);
    maxDateFormatted!: string;
    selectRow = 0;
    timeErrorShow = false;
    nextClicked = false;
    selectedTime = '';
    form!: FormGroup;
    timeList = [
        { time: '9:00', availability: true },
        { time: '10:00', availability: true },
        { time: '11:00', availability: true },
        { time: '12:00', availability: true },
        { time: '13:00', availability: true },
        { time: '14:00', availability: true },
        { time: '15:00', availability: true },
        { time: '16:00', availability: true },
    ];
    dayList: { [key: number]: any } = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
    };

    dateFormGroup = this.fb.group({
        date: ['', Validators.required],
        time: ['', Validators.required],
    });
    stepperOrientation: Observable<StepperOrientation>;

    constructor(
        public router: Router,
        private fb: FormBuilder,
        private doctorList: DoctorsListService,
        private modalService: BsModalService,
        private activatedRoute: ActivatedRoute,
        private breakpointObserver: BreakpointObserver,
        private datePipe: DatePipe
    ) {
        this.form = this.fb.group({
            Name: ['Anthony Hawkins', [Validators.required]],
            Email: ['Anthony.Hawkins@email.com', [Validators.required, Validators.email]],
            Phone: ['044123456213', [Validators.required]],
            Message: ['', [Validators.required]],
            Doctor: ['', [Validators.required]],
        });
        this.stepperOrientation = this.breakpointObserver
            .observe('(min-width: 800px)')
            .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
    }

    addAppointment() {
        console.log(this.form.value);
        this.selectedTime = '';
        this.form.reset();
    }

    setTime(time: any) {
        this.form.patchValue({ Time: time });
        this.selectedTime = time;
    }

    ngOnInit(): void {
        this.minDate.setDate(this.minDate.getDate() + 1);
        this.doctorList
            .getDoctorsList()
            .subscribe((x) => (this.doctorLists = x));
        this.maxDate.setDate(this.minDate.getDate() + 7);
        this.maxDateFormatted = this.maxDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
        });
        if (this.selectedDoctor != null) {
            this.activatedRoute.params.subscribe((params) => {
                this.selectedDoctor = params['id'];
                this.DoctorDetails(Number(this.selectedDoctor));
            });
        }
    }

    DoctorDetails(id: number) {
        this.doctorList.getDoctor(id).subscribe((x) => (this.doctor = x));
        this.form.patchValue({ Doctor: id });
    }

    openDoctorDialog(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    }
    getDaysBetween(startDate: Date, endDate: Date): Date[] {
        const days: Date[] = [];
        let currentDate = new Date(startDate);
        let daysCount = 1;
        while (currentDate < endDate) {
            days.push(new Date(currentDate));
            this.dayList[daysCount] = new Date(currentDate);
            currentDate.setDate(currentDate.getDate() + 1);
            daysCount += 1;
        }

        return days;
    }
    getDaysNextWeek() {
        this.minDate.setDate(this.minDate.getDate() + 7);
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.selectedTime = '';
        this.getDaysBetween(this.minDate, this.maxDate);
    }
    getDaysLastWeek() {
        let currentDate = new Date();
        if (currentDate < this.minDate) {
            this.minDate.setDate(this.minDate.getDate() - 7);
            this.maxDate.setDate(this.maxDate.getDate() - 7);
            this.selectedTime = '';
            this.getDaysBetween(this.minDate, this.maxDate);
        }
    }
    clickTime(selectDate: any, selectTime: any) {
        this.selectRow = selectDate;
        this.selectedTime = selectTime;
        this.timeErrorShow = true;
        const newValues = { date: this.dayList[selectDate], time: selectTime };
        this.dateFormGroup.setValue(newValues);
        this.dateFormGroup.removeValidators(Validators.required);
    }
}
