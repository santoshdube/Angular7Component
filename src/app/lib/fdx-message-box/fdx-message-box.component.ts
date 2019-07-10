import { Component, OnInit,Input, HostListener } from '@angular/core';
import { interval } from 'rxjs';
const secondsCounter = interval(5000);
@Component({
  selector: 'app-fdx-message-box',
  templateUrl: './fdx-message-box.component.html',
  styleUrls: ['./fdx-message-box.component.css']
})
export class FdxMessageBoxComponent implements OnInit {
  @Input('data') data : any;
  @Input('pushMessage') pushMessage : any;
  @Input('totalMsg') totalMsg : any;
  @HostListener('scroll', ['$event'])
  newMsg : boolean = false;
  oldMsg : boolean = true;
  
  
  noOfMsg : any ;
  constructor( ) { }

  ngOnInit() {
    
  }
  divScroll($event){
    if($event.srcElement.scrollTop > 10){
      $event.srcElement.firstChild.firstChild.classList.add('sticky')
    }else {
      $event.srcElement.firstChild.firstChild.classList.remove('sticky')
    }
  }
 
  

}
