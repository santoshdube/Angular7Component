import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, AfterViewChecked} from '@angular/core';


@Component({
  selector: 'app-fdx-simple-table',
  templateUrl: './fdx-simple-table.component.html',
  styleUrls: ['./fdx-simple-table.component.css']
})
export class FdxSimpleTableComponent implements OnInit, AfterViewInit  {
  @Input('id') id:any;
  @Input('data') data: any;
  @Input('column') column: any;
  @Input('height') height:any;
  @Input('findFeature') findFeature:any;
  @Input('findField') findField:any;
  @Input('defaultFind') defaultFind :any;
  @Input('placeHoder') placeHoder : string;
  @ViewChild("simpleTable") elementView: ElementRef;
  @ViewChild("scrollBody") scrollBody: ElementRef;

  field:any;
  findList : any =[];
  dataList : any =[];
  currentPos : any = 0;
  nextPrev : boolean = false;
  targetElement : any ;
  SelectedColumn : any ="";
  searchValue : any ="";
  tableBody : any;

  constructor(private element : ElementRef) { 
    
  }

  ngOnInit() {
   this.field = this.defaultFind;
  }
  ngAfterViewInit() {
      // child is set
      this.targetElement = this.elementView;
      this.tableBody = this.scrollBody;
      this.clearSelected();
    }
    ngAfterViewChecked(){
       this.createDataList();    
    }
    onKey(event: any) {
            
      this.findList = [];
      this.currentPos = 0
      var rGroup = event.srcElement.form.field;
      this.searchValue = event.srcElement.value;
      this.clearSelected();
      if (event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57)) {
        return false;
      }else {
          if(this.searchValue.length > 1){
                this.nextPrev = true;
                  // Select search column from radio
                
                  for(var i=0;i < rGroup.length; i++){
                      if(rGroup[i].checked){
                        this.SelectedColumn = rGroup[i].id;
                      }
                  }                  
                  for(var i=0;i<this.dataList.length;i++){
                    var elemPos;
                      if(this.dataList[i][this.SelectedColumn] == this.searchValue){
                        //this.dataList[i]['id'] = i;
                        this.findList.push(this.dataList[i]);
                        var elemId = this.findList[0].id+'-'+this.SelectedColumn+'-'+this.searchValue;
                        document.getElementById(elemId).classList.add('selected');
                        elemPos = this.tableBody.nativeElement.querySelector('.selected').offsetTop;
                        this.tableBody.nativeElement.scrollTop =elemPos;
                      }
                  }
                  if(this.findList.length>0){
                    this.currentPos = 1
                  }
                }else {
                  this.nextPrev = false;
                  this.findList = [];
                  this.currentPos = 0
                }
      }
  

  }
  createDataList(){
    this.dataList =[];
    var allRow =this.tableBody.nativeElement.getElementsByTagName('tr');
    if(allRow.length > 0){
      for(var i=0; i < allRow.length;i++){
        var allTd = allRow[i].querySelectorAll('td');
         var list = {};
          for(var j=0; j < allTd.length;j++){
              var key = allTd[j].id.split('-')[1];
              var value = allTd[j].id.split('-')[2];              
                list[allTd[j].id.split('-')[1]] = allTd[j].id.split('-')[2]
          }
            list['id'] = allRow[i].id;
            this.dataList.push(list);
      }
    }
    
  }
  clearSelected(){
    var allTd = this.targetElement.nativeElement.querySelectorAll('td');
    if(allTd.length>0){
        for(var i=0; i < allTd.length; i++){
          allTd[i].classList.remove('selected');
        }
    }
  }

  findPrevious(event:any){
    var elemId;
    var elemPos;
    if(this.currentPos>1){
       this.currentPos = this.currentPos-1
       this.clearSelected();
        elemId = this.findList[this.currentPos-1].id+'-'+this.SelectedColumn+'-'+this.searchValue;
        document.getElementById(elemId).classList.add('selected');
        elemPos = this.tableBody.nativeElement.querySelector('.selected').offsetTop;
        this.tableBody.nativeElement.scrollTop =elemPos;
     }
      
  }

  findNext(event:any){    
     var elemId;
     var elemPos;
     if(this.findList.length > this.currentPos){
       this.currentPos = this.currentPos+1
       this.clearSelected();
       elemId = this.findList[this.currentPos-1].id+'-'+this.SelectedColumn+'-'+this.searchValue;
       document.getElementById(elemId).classList.add('selected');
       elemPos = this.tableBody.nativeElement.querySelector('.selected').offsetTop;
       
       this.tableBody.nativeElement.scrollTop =elemPos;
     }
  }

  radioCheck(event:any){
    this.clearSelected();
    this.element.nativeElement.querySelector(".find-text").value="";
    this.nextPrev = false;
  } 
}
