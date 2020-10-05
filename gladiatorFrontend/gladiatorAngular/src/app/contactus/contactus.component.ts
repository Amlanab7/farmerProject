import { Component, OnInit } from '@angular/core';
import { ContactQuery } from '../Models/ContactQuery';
import { UsertableService } from '../services/usertable.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name: string;
  email: string;
  message: string;
contactquery:ContactQuery=new ContactQuery();
  constructor(private service:UsertableService){}

ngOnInit(): void {
    
} 
  submitForm() {
    // const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    // alert(allInfo); 
    this.contactquery.email_cu=this.email;
    this.contactquery.message=this.message;
    this.service.ContactUs(this.contactquery).subscribe(data=>
      console.log(data));
      alert("Query place.We will reach you soon!");
  }

}
