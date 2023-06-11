import { Component } from '@angular/core';

@Component({
  selector: 'app-component0ne',
  templateUrl: './component0ne.component.html',
  styleUrls: ['./component0ne.component.css']
})
export class Component0neComponent {
  textValue:string = "Value is coming from component";
  userName!: string;
  userInput!:number;
  userInput01!:number;
  result!:number;

  buttonClick() {
    console.log("Button click event worked!");
    this.result = this.userInput + this.userInput01;
    
    console.log(this.result);
    
  }

  onKeyup(){
    console.log(this.userName);   
    console.log(this.textValue);
  }

}
