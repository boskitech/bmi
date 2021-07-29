import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent{

  public weight!:number;
  public height!:number;
  public bodymass!:number

  /*bmi = {
    height: 176,
    weight: 110
*/

  calc(){
    this.bodymass = (this.weight) / ((this.height/100) * (this.height/100));
  }

};


