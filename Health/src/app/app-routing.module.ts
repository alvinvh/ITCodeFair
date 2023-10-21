import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { AppointmentPageComponent } from './components/pages/appointment-page/appointment-page.component';
import { DoctorDetailsPageComponent } from './components/pages/doctor-details-page/doctor-details-page.component';
import { DoctorsPageComponent } from './components/pages/doctors-page/doctors-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { loginGuardGuard } from './components/guard/login-guard.guard';
import { DashboardUserComponent } from './components/pages/dashboard-user/dashboard-user.component';
import { DashboardDoctorComponent } from './components/pages/dashboard-doctor/dashboard-doctor.component';


const routes: Routes = [
    {path: 'index', component: HomeComponent},
    {path: 'about-us', component: AboutPageComponent},
    {path: 'doctors', component: DoctorsPageComponent},
    {path: 'doctor-details/:id', component: DoctorDetailsPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'appointment', component: AppointmentPageComponent},
    {path: 'appointment/:id', component: AppointmentPageComponent},
    // {path: 'appointment', component: AppointmentPageComponent, canActivate:[loginGuardGuard]},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'forgot-password', component: ForgotPasswordPageComponent},
    {path: 'user-dashboard', component: DashboardUserComponent},
    {path: 'doctor-dashboard', component: DashboardDoctorComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }