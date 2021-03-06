import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageClass } from 'src/app/Models/Image';
import { UserType } from '../Models/UserType';
import { UsertableService } from '../services/usertable.service';

@Component({
  selector: 'app-docs-upload',
  templateUrl: './docs-upload.component.html',
  styleUrls: ['./docs-upload.component.css']
})
export class DocsUploadComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}

  selectedFile:File=null;;
  imageAPIurl="https://localhost:44331/api/Image/upload";
  typedata:UserType=new UserType();

  image:ImageClass=new ImageClass();
  constructor(private http:HttpClient,private router:Router,private service:UsertableService) { }

  ngOnInit(): void {
  }
  onSelectedFile(event){
    if(event.target.files.length>0)
    {
      console.log(event);
      this.selectedFile=<File>event.target.files[0];
    
    }}
    onUploadPan(){
      const fd=new FormData();
      fd.append('image',this.selectedFile,this.selectedFile.name);
      var UID = JSON.parse(localStorage.getItem('userData'));
      
      this.http.post(this.imageAPIurl+"\\"+UID.UID,fd)
      .subscribe(res=>console.log(res));
      this.image.imgCaption="PAN";
      this.image.UID=UID.UID;
     
      this.service.caption(this.image).subscribe(res=>console.log(res));
    }
    onUploadAadhar(){
      const fd=new FormData();
      fd.append('image',this.selectedFile,this.selectedFile.name);
      var UID = JSON.parse(localStorage.getItem('userData'));
      
      this.http.post(this.imageAPIurl+"\\"+UID.UID,fd)
      .subscribe(res=>console.log(res));
     this.image.UID=UID.UID;
     this.image.imgCaption="Aadhar";
      this.service.caption(this.image).subscribe(res=>console.log(res));
    }
    onSubmit(){
      var user=JSON.parse(localStorage.getItem('userData'));
      // alert(user.UID);
      
     this.typedata.UID=user.UID;
    //  alert(this.typedata.UID);
     this.typedata.type="Farmer";
    
      // alert(this.typedata.UID+this.typedata.type);
      this.service.usertype(this.typedata).subscribe(data=>{
        console.log(data);
        localStorage.setItem("userData",JSON.stringify(data));
           },(e)=>{
        console.log(e);
   
      })

      alert("User Added Successfully");
      this.router.navigate(['loginfarmer']);
       }
}
