import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { APIURL } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BreakfastService {

  breakfastItem: any;

  constructor(private http: HttpClient) { }

  // Get all breakfast items
  getAllBreakfast() {
    return this.http.get(`http://localhost:4000/breakfast/all`);
  }

  // Create breakfast item
  createBreakfast(form) {
    JSON.stringify(form);
    return this.http.post(`http://localhost:4000/breakfast/create`, form);
  }

  // Get single breakfast by id for updating
  getBfastItem(id) {
    this.http.get(`http://localhost:4000/breakfast/one/${id}`).subscribe(data => {
     this.breakfastItem = data;
     console.log(this.breakfastItem);
   });
  }

  // Update breakfast by id
  updateBreakfast(form) {
    console.log(form)
    return this.http.put(`http://localhost:4000/breakfast/edit/${this.breakfastItem.id}`, form);
  }

  // Delete breakfast by id
  deleteLandmark(id) {
    return this.http.delete(`http://localhost:4000/breakfast/delete/${this.breakfastItem.id}`);
  }

}
