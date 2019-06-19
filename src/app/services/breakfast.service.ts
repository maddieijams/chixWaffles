import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BreakfastService {
  breakfastItem: any;

  constructor(private http: HttpClient) {}

  // Get all breakfast items
  getAllBreakfast() {
    return this.http.get(`${APIURL}/breakfast/all`);
  }

  // Create breakfast item
  createBreakfast(form) {
    JSON.stringify(form);
    return this.http.post(`${APIURL}/breakfast/create`, form);
  }

  // Get single breakfast by id for updating
  getBfastItem(id) {
    return this.http.get(`${APIURL}/breakfast/one/${id}`);
  }

  // Update breakfast by id
  updateBreakfast(id, form) {
    console.log(form);
    return this.http.put(`${APIURL}/breakfast/edit/${id}`, form);
  }

  // Delete breakfast by id
  deleteLandmark(id) {
    return this.http.delete(`${APIURL}/breakfast/delete/${id}`);
  }
}
