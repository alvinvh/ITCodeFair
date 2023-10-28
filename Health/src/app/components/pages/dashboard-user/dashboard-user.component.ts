import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserDashboardService } from '../../services/user-dashboard.service';

@Component({
    selector: 'app-dashboard-user',
    templateUrl: './dashboard-user.component.html',
    styleUrls: ['./dashboard-user.component.scss'],
})
export class DashboardUserComponent {
    menu = 'profile';
    username = localStorage.getItem('currentUser');
    title = 'trial';
    header = ['Doctor', 'Date'];
    headerPrescription = ['Date', 'Name', 'Doctor'];
    headerRecords = ['Name', 'Date', 'Description', 'Doctor'];
    data = this.userService.getUserDashboard()
    dataPrescription = this.userService.getUserPrescription()
    dataRecords = this.userService.getUserRecords()
    constructor(private authService: AuthService, public userService:UserDashboardService) {}
    logout() {
        this.authService.logout();
    }
}
