import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-dashboard-user',
    templateUrl: './dashboard-user.component.html',
    styleUrls: ['./dashboard-user.component.scss'],
})
export class DashboardUserComponent {
  menu = 'profile';
    username = localStorage.getItem('userName');
    title = 'trial';
    header = ['a', 'b','c','d','e','f'];
    data = [
        { a: 1, b: 1,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 1, b: 1,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 1, b: 1,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
        { a: 2, b: 2,c: 3,d: 4,e:5,f:6123123123123123123 },
    ];
    constructor(private authService : AuthService){}
    logout(){
      this.authService.logout();
    }
}
