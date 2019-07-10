import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-colpagination',
  templateUrl: './colpagination.component.html',
  styleUrls: ['./colpagination.component.css']
})
export class ColpaginationComponent implements OnInit, AfterViewInit {
  column : any = {};
  jsonURL = 'assets/json/trailer-statistics.json';
  allRows : any =[];
  allHeaders : any = [];
  prevCols : boolean = true;
  nextCols : boolean = false;
  startCol : number=0;
  endCol : number = 0;
  totalCol : number = 35;
  tableData : any = [];
 
  
  options = [
            {name: 'Trailer', prop:'trailer', headerClass:'', bodyClass:'', width:'120', editable:false, fieldType:''},
            {name: 'Trailer Prefix', prop:'trailerprofix', headerClass:'', bodyClass:'', width:'80', editable:false, fieldType:''},
            {name: 'Overhead', prop:'overhead', headerClass:'', bodyClass:'', width:'80', editable:true,fieldType:'input'},
            {name: 'Met 1', prop:'met1', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 2', prop:'met2', headerClass:'', bodyClass:'',  width:'100', editable:true, fieldType:'input'},
            {name: 'Met 3', prop:'met3', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 4', prop:'met4', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 5', prop:'met5', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 6', prop:'met6', headerClass:'', bodyClass:'', width:'100', editable:false},
            {name: 'Met 7', prop:'met7', headerClass:'', bodyClass:'',  width:'100', editable:false, fieldType:''},
            {name: 'Met 8', prop:'met8', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 9', prop:'met9', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 10', prop:'met10', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 11', prop:'met11', headerClass:'', bodyClass:'',  width:'100', editable:false, fieldType:''},
            {name: 'Met 12', prop:'met12', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 13', prop:'met13', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 14', prop:'met14', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 15', prop:'met15', headerClass:'', bodyClass:'',  width:'100', editable:false, fieldType:''},
            {name: 'Met 16', prop:'met16', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 17', prop:'met17', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 18', prop:'met18', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 19', prop:'met19', headerClass:'', bodyClass:'',  width:'100', editable:false, fieldType:''},
            {name: 'Met 20', prop:'met20', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 21', prop:'met21', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 22', prop:'met22', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 23', prop:'met23', headerClass:'', bodyClass:'',  width:'100', editable:false, fieldType:''},
            {name: 'Met 24', prop:'met24', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 25', prop:'met25', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 26', prop:'met26', headerClass:'', bodyClass:'',  width:'100', editable:false, fieldType:''},
            {name: 'Met 27', prop:'met27', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 28', prop:'met28', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 29', prop:'met29', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 30', prop:'met30', headerClass:'', bodyClass:'',  width:'100', editable:false, fieldType:''},
            {name: 'Met 31', prop:'met31', headerClass:'', bodyClass:'',  width:'100', editable:false, fieldType:''},
            {name: 'Met 32', prop:'met32', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 33', prop:'met33', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 34', prop:'met34', headerClass:'', bodyClass:'', width:'100', editable:false, fieldType:''},
            {name: 'Met 35', prop:'met35', headerClass:'', bodyClass:'',  width:'100', editable:false, fieldType:''},
            {name: 'Auto SML', prop:'autosml', headerClass:'', bodyClass:'', width:'120', editable:false, fieldType:''},
            {name: 'Bag Count', prop:'bagcount', headerClass:'', bodyClass:'', width:'80', editable:false, fieldType:''},
            {name: 'Total', prop:'Total', headerClass:'', bodyClass:'', width:'80', editable:true,fieldType:'input'},
            
        ]
  constructor(private http : HttpClient) {
     

   }
   
   public getJSON(): Observable<any> {
      return this.http.get(this.jsonURL);
    }
  ngOnInit() {
    this.getJSON().subscribe(res => {
        this.tableData = res;
      });
      var record = this.tableData;
      this.allRows =  record;
      this.allHeaders = this.options;
      var newCols =[];
      var newList =[];
      var nCol = 36;
         for(let obj of this.options){
           if(obj.prop.indexOf("met") != -1){
             for (var i=1; i < 8;i++){
                if(obj.prop === "met"+i){
                  newCols.push(obj);
                }
             }
           }else {
             newCols.push(obj);
           }
         }
         this.startCol = 1;
         this.endCol = 7;
      
         this.options = newCols;
         //this.tableData = newList;
       
     
     

      }      
  ngAfterViewInit(){ 
      
     
      
  }
  previous(event){
   var obj1 = this.allHeaders;
         
     var newCols =[];
      var newList =[];
      this.endCol = this.endCol-7;
     if(this.endCol >= this.endCol-7){
       this.nextCols = false;
       for(let obj of obj1){
           if(obj.prop.indexOf("met") != -1){
             for (var i=this.endCol-6; i < this.endCol+1;i++){
                if(obj.prop === "met"+i){
                  newCols.push(obj);
                }
             }
           }else {
             newCols.push(obj);
           }
         }
         
         
         this.options = newCols;
         if(this.endCol<=7){
          this.prevCols = true;    
         }
     }else {
      this.prevCols = true;
     }
    
  }
   next(event){
     var obj1 = this.allHeaders;
         
     var newCols =[];
      var newList =[];
     if(this.endCol <= this.totalCol){
       this.prevCols = false;
       for(let obj of obj1){
           if(obj.prop.indexOf("met") != -1){
             for (var i=this.endCol+1; i < this.endCol+8;i++){
                if(obj.prop === "met"+i){
                  newCols.push(obj);
                }
             }
           }else {
             newCols.push(obj);
           }
         }
         
         this.startCol = this.endCol+1;
         this.endCol = this.endCol+7;
         this.options = newCols;
         if(this.endCol > (this.totalCol-7)){
          this.nextCols = true;    
         }
     }else {
       this.nextCols = true;
     }
       
         
    

  }
}
