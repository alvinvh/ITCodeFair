import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { AboutComponent } from './components/common/about/about.component';
import { AppointmentComponent } from './components/common/appointment/appointment.component';
import { CallUsComponent } from './components/common/call-us/call-us.component';
import { ServicesComponent } from './components/common/services/services.component';
import { HomeBannerComponent } from './components/pages/home/home-banner/home-banner.component';
import { HeaderComponent } from './components/common/header/header.component';
import { MiddleHeaderComponent } from './components/common/header/middle-header/middle-header.component';
import { NavbarComponent } from './components/common/header/navbar/navbar.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { AppointmentPageComponent } from './components/pages/appointment-page/appointment-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { DoctorsPageComponent } from './components/pages/doctors-page/doctors-page.component';
import { DoctorDetailsPageComponent } from './components/pages/doctor-details-page/doctor-details-page.component';
import { AppointmentDoctorComponent } from './components/common/appointment-doctor/appointment-doctor.component';
import { DoctorDialogComponent } from './components/common/appointment-doctor/doctor-dialog/doctor-dialog.component';
import { SignInComponent } from './signin/signin.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        FooterComponent,
        FeaturesComponent,
        AboutComponent,
        AppointmentComponent,
        CallUsComponent,
        ServicesComponent,
        ServicesPageComponent,
        HomeBannerComponent,
        HeaderComponent,
        MiddleHeaderComponent,
        NavbarComponent,
        AppointmentPageComponent,
        LoginPageComponent,
        RegisterPageComponent,
        ForgotPasswordPageComponent,
        AboutPageComponent,
        DoctorsPageComponent,
        DoctorDetailsPageComponent,
        AppointmentDoctorComponent,
        DoctorDialogComponent,
        SignInComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        NgxScrollTopModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        AccordionModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        FormsModule,
        NgxPaginationModule,
        HttpClientModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
