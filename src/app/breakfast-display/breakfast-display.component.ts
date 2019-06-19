import { Component, OnInit, Inject } from '@angular/core';
import { BreakfastService } from '../services/breakfast.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-breakfast-display',
  templateUrl: './breakfast-display.component.html',
  styleUrls: ['./breakfast-display.component.css']
})
export class BreakfastDisplayComponent implements OnInit {

  allBreakfast: any;

  constructor(private bfastservice: BreakfastService, public router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.bfastservice.getAllBreakfast().subscribe(data => {
      console.log(data);
      this.allBreakfast = data;
    });
  }

  getSingleBfast(id) {
    this.bfastservice.getBfastItem(id);
  }

}
