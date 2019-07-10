import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sortui';
  msgData : any ;
  pushMsg : any;
  msgCount : any;
  
  private jsonURL = 'assets/json/AlertMessagePopIn.json';
  private _jsonURL = 'assets/json/AlertMessagePopOut.json';
  
  constructor(private http : HttpClient){}

   public getJSON(): Observable<any> {
      return this.http.get(this.jsonURL);
    }
   public getMsgUpdate(): Observable<any> {
      return this.http.get(this._jsonURL);
    }

  ngOnInit() {
     this.getJSON().subscribe(res => {
        this.msgData = res;
         console.log(res);
         this.msgCount = this.msgData.length;
      });
      this.getMsgUpdate().subscribe(res =>{
          this.pushMsg = res;
      }); 
  }
  

  
}
