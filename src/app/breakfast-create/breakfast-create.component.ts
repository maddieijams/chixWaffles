import { Component, OnInit } from '@angular/core';
import { BreakfastService } from '../services/breakfast.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-breakfast-create',
  templateUrl: './breakfast-create.component.html',
  styleUrls: ['./breakfast-create.component.css']
})
export class BreakfastCreateComponent implements OnInit {

  bfastForm: FormGroup;
  returnData: any;

  constructor(private bfastservice: BreakfastService, public router: Router) { }

  ngOnInit() {
    this.bfastForm = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      image: new FormControl(),
      desc: new FormControl()
    });
  }

  onSubmit() {
    this.bfastservice.createBreakfast(this.bfastForm.value).subscribe(data => {
      this.returnData = data;
    });

  }

}
