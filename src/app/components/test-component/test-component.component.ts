import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/Interface/Iauthor';
@Component({
  selector: 'app-test-component', //Selector is used to display data on components.
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})




export class TestComponentComponent implements OnInit {

  //myForm: FormGroup;
  title = 'AuthorBook';
  name:string = "Valiant";
  age:number = 123;
  name2:string = "name2";
  sand:boolean = true;
  author: IAuthor = {id:1,firstname: 'Manish',lastname:'Shrestha'};
  authors : IAuthor[] = [
    {id:2,firstname: 'Doney',lastname:'Shrestha'},
    {id:3,firstname: 'Sony',lastname:'Shrestha'}
  ]
  
  constructor() {

  }

  ngOnInit(): void {
    console.log("Testter lige min log");
    console.log(this.authors[1].firstname);
    this.firstmethod(); // method call / invoke
    let value = this.methodReturnANumber();
    console.log(value);
    let str = this.methodReturnAString();
    console.log(str);
    //FormGroup Implementing.

  }

  // define method / declare/ create etc.
  firstmethod()
  {
      console.log("firstmethod!!");
  }
  methodReturnANumber(): number{
    return 12;
  }

  methodReturnAString(): string{
    return "function";
  }
}
