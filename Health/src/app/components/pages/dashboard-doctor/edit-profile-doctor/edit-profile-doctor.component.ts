import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorsListService } from 'src/app/components/services/doctors-list.service';

@Component({
    selector: 'app-edit-profile-doctor',
    templateUrl: './edit-profile-doctor.component.html',
    styleUrls: ['./edit-profile-doctor.component.scss'],
})
export class EditProfileDoctorComponent implements OnInit {
    @Input() doctorDetails!: any;
    doctorForm!: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private doctorAPI: DoctorsListService,
        private cdr: ChangeDetectorRef
    ) {}
    ngOnInit(): void {
        this.doctorForm = this.formBuilder.group({
            doctorId: this.doctorDetails.doctorId,
            doctorName: [this.doctorDetails.doctorName, [Validators.required]],
            image_url: this.doctorDetails.image_url,
            specialist: [this.doctorDetails.specialist, [Validators.required]],
            qualification: [
                this.doctorDetails.qualification,
                [Validators.required],
            ],
            certification: [
                this.doctorDetails.certification,
                [Validators.required],
            ],
            education: [this.doctorDetails.education, [Validators.required]],
            description: [
                this.doctorDetails.description,
                [Validators.required],
            ],
            availability: this.doctorDetails.availability,
        });
    }
    onSubmit() {
        this.doctorAPI.updateDoctor(this.doctorForm.value).subscribe((updatedDoctor) => {
          location.reload();  });
           
    }

    refresh(){
      this.doctorAPI.getDoctor(this.doctorDetails.doctorId).subscribe((x)=>this.doctorDetails = x);
      this.doctorForm.setValue(this.doctorDetails)
      console.log(this.doctorDetails)
      console.log(this.doctorForm.value)
    }
}
