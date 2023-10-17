import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Response } from "./response";
import { UserClaim } from "./user-claim";
import { Observable, catchError, map, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    public signIn(email: string, password: string) {
        return this.http.post<Response>('http://localhost:5247/api/auth/signin', {
            email: email, 
            password: password
        }); 
    }

    public singOut() {
        return this.http.get('http://localhost:5247/api/auth/signout'); 
    }

    public user() {
        return this.http.get<UserClaim[]>('http://localhost:5247/api/auth/user'); 
    }

    public isSignedIn(): Observable<boolean> {
        return this.user().pipe(
            map((userClaims) => {
                const hasClaims = userClaims.length > 0; 
                return !hasClaims ? false : true; 
            }), 
            catchError((error) => {
                return of(false); 
            })
        ); 
    }


}