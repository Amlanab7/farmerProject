import { Component, OnInit } from '@angular/core';
import { SoldHistory } from 'src/app/Model/SoldHistory';
import { CroptableService } from 'src/app/services/croptable.service';

@Component({
  selector: 'app-sold-history',
  templateUrl: './sold-history.component.html',
  styleUrls: ['./sold-history.component.css']
})
export class SoldHistoryComponent implements OnInit {
  soldItems:SoldHistory[];
  constructor(private service:CroptableService) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem('userData'));
    this.service.soldHistory(user.UID).subscribe(data=>{
      this.soldItems = data;
      console.log(this.soldItems);
    });
  }

}
