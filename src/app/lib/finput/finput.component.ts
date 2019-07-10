import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-finput',
  templateUrl: './finput.component.html',
  styleUrls: ['./finput.component.css']
})
export class FinputComponent implements OnInit {
  @Input() displaylable : String ='';
  @Input() name : string = '';
  @Input() id : string = '';
  @Input() required : boolean = false;  
  @Input() min : number = 0;
  @Input() max : number = 0;
  @Input() minError : string = '';
  @Input() maxError : string = '';
  erromsg : string ='';

  ngOnInit() {
  }
  validate(evt):void {
    if(this.required == true){
      var inputval = evt.target.value
      if(inputval.length < this.min){
        this.erromsg = this.minError;
      }else if(inputval.length > this.max){
        this.erromsg = this.maxError;
        evt.target.focus();
      }else {
        this.erromsg = "";
      }
    }
  }
  onKey(event: any) { 
    this.erromsg = "";
  }

}
