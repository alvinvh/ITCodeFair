import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
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

    constructor(public router: Router, private fb:FormBuilder) {
        this.form = this.fb.group({
            Name:['',[Validators.required]],
            Email:['',[Validators.required, Validators.email]],
            Phone:['',[Validators.required]],
            Date:['',[Validators.required]],
            Time:['',[Validators.required]],
            Message:['',[Validators.required]]
        })
    };
    
    addAppointment(){
        console.log(this.form.value);
        this.form.reset();
    }
    
    setTime(time:any){
        this.form.patchValue({ Time: time}); 
    }

    ngOnInit(): void {}
}
