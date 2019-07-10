import { Component, OnInit, Input, HostListener, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
//declare var $:any;

@Component({
  selector: 'app-ftable',
  templateUrl: './ftable.component.html',
  styleUrls: ['./ftable.component.css']
})
export class FtableComponent implements AfterViewInit, OnInit  {
bodyWidth : number = 0;
leftPos : number =0;
leftHeadPos: number;
headerHeight : number;
@HostListener('scroll', ['$event'])
@ViewChild("dataTable") elementView: ElementRef;
//@ViewChild("first-item") firstItem: ElementRef;
@Input() tableId: any;
@Input() option : any [];
@Input() data : any [];
@Input() height : any;
@Input() width : any;

  divScroll($event) {
   /*$('thead').css("left", -$("tbody").scrollLeft()); //fix the thead relative to the body scrolling
   $('thead th:nth-child(1)').css("left", $("tbody").scrollLeft()); //fix the first cell of the header
   $('tbody td:nth-child(1)').css("left", $("tbody").scrollLeft()); //fix the first column of tdbod*/
    this.leftPos = $event.srcElement.scrollLeft;
    this.leftHeadPos = -$event.srcElement.scrollLeft;
  }
  constructor(private cd: ChangeDetectorRef) { 
     
  }
  ngOnInit() {
      
  }
  ngAfterViewInit(){
    this.bodyWidth = this.elementView.nativeElement.clientWidth;
    this.headerHeight = this.elementView.nativeElement.querySelector('tr').offsetHeight;
    this.cd.detectChanges();
  }

}