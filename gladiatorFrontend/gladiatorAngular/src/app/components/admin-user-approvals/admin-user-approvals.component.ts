import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUserApprovalForm } from 'src/app/Models/AdminUserapprovalforms';
import { FarmerRegistrationForm } from 'src/app/Models/FarmerRegistrationForm';
import { UsertableService } from 'src/app/services/usertable.service';

@Component({
  selector: 'app-admin-user-approvals',
  templateUrl: './admin-user-approvals.component.html',
  styleUrls: ['./admin-user-approvals.component.css']
})
export class AdminUserApprovalsComponent implements OnInit {
  listUsers:AdminUserApprovalForm[];
tempuser:AdminUserApprovalForm;
  constructor(private service:UsertableService,private router:Router) { }

  ngOnInit(): void {
     this.service.getAllUsers().subscribe(data=>{
       this.listUsers = data;
       console.log(this.listUsers);
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

}
