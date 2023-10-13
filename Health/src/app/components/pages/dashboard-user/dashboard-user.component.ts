import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-dashboard-user',
    templateUrl: './dashboard-user.component.html',
    styleUrls: ['./dashboard-user.component.scss'],
})
export class DashboardUserComponent {
    username = localStorage.getItem('userName');
    title = 'trial';
    header = ['a', 'b'];
    data = [
        { a: 1, b: 1 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 1, b: 1 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 1, b: 1 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 2 },
    ];
    constructor(private authService : AuthService){}
    logout(){
      this.authService.logout();
    }
}
