import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUserApprovalForm } from 'src/app/Models/AdminUserapprovalforms';
import { FarmerRegistrationForm } from 'src/app/Models/FarmerRegistrationForm';
import { ImageClass } from 'src/app/Models/Image';
import { UsertableService } from 'src/app/services/usertable.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  i:FarmerRegistrationForm=new FarmerRegistrationForm();
  tempuser:FarmerRegistrationForm=new FarmerRegistrationForm();
  UID;
  panimage:ImageClass= new ImageClass();
  aadharimage:ImageClass= new ImageClass();
  public imgurl='';
  imgcommonpath:string="D:\\GLADIATOR\\farmerProject\\gladiatorBackend\\gladiatorWebApi\\WebApi\\Images\\";
  constructor(private service:UsertableService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {console.log(data);});
    
    this.UID = this.route.snapshot.paramMap.get('UID');
   // var user = JSON.parse(localStorage.getItem('userData'));
   alert("going to userdetails");
     this.service.getUserbyUID(this.UID).subscribe(data=>{
       this.i=data;
       console.log(this.i);
     });
     this.getPan();
     this.getAadhar();
     

  }
  getPan(){
    alert("going to getpan");

    this.service.getPan(this.UID).subscribe(data=>{
     this.panimage=data;
     console.log(this.panimage);
   })
    alert(this.panimage.imgCaption);
   this.imgurl=this.imgcommonpath+this.panimage.imgName;
  }
  getAadhar(){
    alert("going to getadhar");
     this.service.getAadhar(this.UID).subscribe(data=>{
       this.aadharimage=data;
       console.log(this.aadharimage);
     });
  }
   onAccept(UID){
     alert(UID);
     this.service.accept(UID).subscribe(data=>{
      this.tempuser = data;
      console.log(this.tempuser);
      alert("user approved");
    });

   }
   onReject(UID){
    this.service.reject(UID).subscribe(data=>{
      this.tempuser = data;
      console.log(this.tempuser);
      alert("user rejected");
    });

}
// getPan(UID){
//   this.service.getPan(UID).subscribe(data=>{
//     this.panimage=data;
//     console.log(this.panimage);
//   });
//   alert(this.panimage.imgName);
// }
// getAadhar(UID){
//   this.service.getAadhar(UID).subscribe(data=>{
//     this.aadharimage=data;
//     console.log(this.aadharimage);
//   });
// }
}
