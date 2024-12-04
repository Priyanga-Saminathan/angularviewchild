import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit, AfterContentInit, AfterContentChecked {
  colour:String="brown"
  counter:number=0
  @ContentChild("head") head!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.counter++;
  }
  decrement(){
    if(this.counter>0){
      this.counter--;
    }
    
  }
  ngAfterContentInit(){
    console.log(this.head);
    this.head.nativeElement.style.color="pink";
  }
  func(e:any){
    this.colour=e.target.value;
    console.log(this.colour);
  }
  ngAfterContentChecked(){
    this.head.nativeElement.style.color=this.colour;
  }

}
