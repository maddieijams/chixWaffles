import { Component, OnInit } from "@angular/core";
import { BreakfastService } from "../services/breakfast.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

@Injectable({
  providedIn: "root"
})
@Component({
  selector: "app-breakfast-edit",
  templateUrl: "./breakfast-edit.component.html",
  styleUrls: ["./breakfast-edit.component.css"]
})
export class BreakfastEditComponent implements OnInit {
  bfastForm: FormGroup;
  bfastItem: any;

  constructor(public fb: FormBuilder, public bfastservice: BreakfastService, public router: Router) {}

  returnData: any;

  ngOnInit() {
    // this.bfastservice.breakfastItem = this.bfastItem;

    this.bfastForm = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      image: new FormControl(),
      desc: new FormControl()
    });
  }

  ngAfterViewInit(){
    this.bfastForm.markAsDirty();
    // for (let i in this.bfastForm) {
  //  }
  }

  onSubmit() {
    console.log(this.bfastForm.value);
    this.bfastservice.updateBreakfast(this.bfastForm.value).subscribe(data => {
      this.returnData = data;
    });
  }

  deleteClick(id) {
    this.bfastservice.deleteLandmark(id).subscribe(data => {
      console.log(data);
    });
  }


}
