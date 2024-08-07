import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title :string="";
  isVisible=true;


  // ChangeVisibility(){
  //   this.isVisible=!this.isVisible;
  // }

  
  ngOnInit() {
    this.title="CHANDAN";
  }
}
