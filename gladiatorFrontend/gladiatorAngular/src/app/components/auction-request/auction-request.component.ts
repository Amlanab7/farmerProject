import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auction-request',
  templateUrl: './auction-request.component.html',
  styleUrls: ['./auction-request.component.css']
})
export class AuctionRequestComponent implements OnInit {
  requestForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.requestForm = this.formBuilder.group({
			cropType: new FormControl(),
      cropName: new FormControl(),
      fertType: new FormControl(),
      quantity: new FormControl(),
      basePrice: new FormControl()
      });
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('Type:' + this.requestForm.get('cropType').value);
  }

}
