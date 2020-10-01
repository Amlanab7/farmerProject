import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docs-upload',
  templateUrl: './docs-upload.component.html',
  styleUrls: ['./docs-upload.component.css']
})
export class DocsUploadComponent implements OnInit {
  selectedFile:File=null;;
  imageAPIurl="https://localhost:44331/api/Image/upload";

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  onSelectedFile(event){
    if(event.target.files.length>0)
    {
      console.log(event);
      this.selectedFile=<File>event.target.files[0];
    
    }}
    onUpload(){
      const fd=new FormData();
      fd.append('image',this.selectedFile,this.selectedFile.name);
      var UID = JSON.parse(localStorage.getItem('userData'));
      
      this.http.post(this.imageAPIurl+"\\"+UID.UID,fd)
      .subscribe(res=>console.log(res));

      
    }
}
