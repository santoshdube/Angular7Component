import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {
  //private jsonURL = 'assets/json/data-table.json';
  private jsonURL = 'assets/json/single-load-area.json';
  recordSet : any;
  defaultField = "nlpt"
  headerColumn = [
      {label:"Destination", prop:"destination", headerClass:"col-md-2", bodyClass:"col-md-2", width:""},
      {label:"Service", prop:"service", headerClass:"col-md-2", bodyClass:"col-md-2", width:""},
      {label:"Dispatch", prop:"dispatch", headerClass:"col-md-2", bodyClass:"col-md-2", width:""},
      {label:"Larget Package", prop:"largestpackage", headerClass:"col-md-3", bodyClass:"col-md-3", width:""},
      {label:"NL/PT", prop:"nlpt", headerClass:"col-md-3", bodyClass:"col-md-3", width:""}
  ];

  constructor(private http : HttpClient) { }
  public getJSON(): Observable<any> {
      return this.http.get(this.jsonURL);
    } 
  ngOnInit() {
    this.getJSON().subscribe(res => {
        this.recordSet = res;
      }); 
  }

}
