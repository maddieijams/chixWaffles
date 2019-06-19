import { Component, OnInit } from "@angular/core";
import { BreakfastService } from "../services/breakfast.service";
import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

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
  returnData: any;
  updateItem: any;
  id: any;
  loaded = false;

  constructor(
    public fb: FormBuilder,
    public bfastservice: BreakfastService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    // });

    this.bfastForm = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      image: new FormControl(),
      desc: new FormControl()
    });

    this.id = this.route.snapshot.paramMap.get("id");

    this.bfastservice.getBfastItem(this.id).subscribe(data => {
      this.updateItem = data;
      this.loaded = true;
      console.log(this.loaded)
      this.setFormValue();
      // console.log(this.updateItem);
    });

  }

  setFormValue() {
    // await this.bfastservice.getBfastItem(this.id);
    // this.updateItem = this.updateItem;
    // console.log(this.updateItem);
    console.log(this.updateItem)
    this.bfastForm.patchValue({
      name: this.updateItem.name,
      address: this.updateItem.address,
      city: this.updateItem.city,
      state: this.updateItem.state,
      image: this.updateItem.image,
      desc: this.updateItem.desc
    });
  }

  onSubmit() {
    console.log(this.bfastForm.value);
    this.bfastservice.updateBreakfast(this.id, this.bfastForm.value).subscribe(data => {
      this.returnData = data;
    });
  }

  deleteClick(id) {
    this.bfastservice.deleteLandmark(this.id).subscribe(data => {
      console.log(data);
    });
  }
}
