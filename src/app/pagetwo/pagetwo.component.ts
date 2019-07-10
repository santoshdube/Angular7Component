import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent implements OnInit {

  private jsonURL = 'assets/json/data-table.json';
  private _jsonURL = 'assets/json/data-table-columns.json';
  tableData : any [];
  
  options = [
            {name: 'Destination', prop:'destination', headerClass:'', bodyClass:'', width:'120', editable:false, fieldType:''},
            {name: 'Service', prop:'service', headerClass:'', bodyClass:'', width:'80', editable:false, fieldType:''},
            {name: 'Dispatch', prop:'dispatch', headerClass:'', bodyClass:'', width:'80', editable:true,fieldType:'input'},
            {name: 'Large Package', prop:'largestpackage', headerClass:'', bodyClass:'', width:'120', editable:false, fieldType:''},
            {name: 'NP/LT', prop:'nlpt', headerClass:'', bodyClass:'',  width:'80', editable:true, fieldType:'input'},
            {name: 'Destination', prop:'destination', headerClass:'', bodyClass:'', width:'80', editable:false, fieldType:''},
            {name: 'Service', prop:'service', headerClass:'', bodyClass:'', width:'80', editable:false, fieldType:''},
            {name: 'Dispatch', prop:'dispatch', headerClass:'', bodyClass:'', width:'80', editable:false, fieldType:''},
            {name: 'Large Package', prop:'largestpackage', headerClass:'', bodyClass:'', width:'120', editable:false},
            {name: 'NP/LT', prop:'nlpt', headerClass:'', bodyClass:'',  width:'80', editable:false, fieldType:''},
            {name: 'Service', prop:'service', headerClass:'', bodyClass:'', width:'80', editable:false, fieldType:''},
            {name: 'Dispatch', prop:'dispatch', headerClass:'', bodyClass:'', width:'80', editable:false, fieldType:''},
            {name: 'Large Package', prop:'largestpackage', headerClass:'', bodyClass:'', width:'120', editable:false, fieldType:''},
            {name: 'NP/LT', prop:'nlpt', headerClass:'', bodyClass:'',  width:'80', editable:false, fieldType:''},
            {name: 'Service', prop:'service', headerClass:'', bodyClass:'', width:'80', editable:false, fieldType:''},
            {name: 'Dispatch', prop:'dispatch', headerClass:'', bodyClass:'', width:'80', editable:false, fieldType:''},
            {name: 'Large Package', prop:'largestpackage', headerClass:'', bodyClass:'', width:'120', editable:false, fieldType:''},
            {name: 'NP/LT', prop:'nlpt', headerClass:'', bodyClass:'',  width:'80', editable:false, fieldType:''}
            
            
        ]
  constructor(private http : HttpClient) {
   

   }
   
   public getJSON(): Observable<any> {
      return this.http.get(this.jsonURL);
    }
   public getTable(): Observable<any> {
      return this.http.get(this._jsonURL);
    } 
  ngOnInit() {
    this.getJSON().subscribe(res => {
        this.tableData = res;
         //console.log(res);
      }); 
      //console.log(this.options);
    
     
     
      
  }

}
