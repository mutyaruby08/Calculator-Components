// import { Component, OnInit } from '@angular/core';
import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent{
n1 = 0;
n2 = 0;

@Output() num1 = new EventEmitter<number>()
@Output() num2 = new EventEmitter<number>()

getNum1(value:string){
  var letters = /[a-zA-Z]/g;
  var check = value;


  if(letters.test(check)){
    alert("Pls Enter a Number");
  }
  else {
    var n1 = parseInt(value);
    this.num1.emit(n1);
    console.log(n1);
  }
}

getNum2(value:string){
  var letters = /[a-zA-Z]/g;
  var check = value;


  if(letters.test(check)){
    alert("Pls Enter a Number");
  }
  else {
    var n2 = parseInt(value);
    this.num2.emit(n2);
    console.log(n2);
  }
}


  // getNum1(value: string){
  //   const parsedInt = parseInt(value);
      
  //     if(!isNaN(parsedInt)){
  //       this.num1 = parsedInt;
  //       console.log(this.num1);
  //     }
  // }

  
  // getNum2(value: string){
  //   const parsedInt = parseInt(value);
      
  //     if(!isNaN(parsedInt)){
  //       this.num2 = parsedInt;
  //       console.log(this.num2);
  //     }
  // }

}
