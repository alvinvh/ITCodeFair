import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsListService {
  

  getDoctorsList(){
    return this.http.get('https://localhost:7258/api/Doctor', {
      withCredentials: false,
    });
  }
  getDoctor(id:number){
    return this.http.get('https://localhost:7258/api/Doctor/' + id, {
      withCredentials: false,
    });
  }
  updateDoctor(details:any){
    return this.http.put('https://localhost:7258/api/Doctor/update', details,{
      withCredentials: false,
    });
  }
  constructor(private http: HttpClient) { }
}
