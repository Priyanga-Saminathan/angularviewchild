import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  colour:String="red";
  @ViewChild("para") paragraph!:ElementRef ;
  @ViewChildren("plural") plural!:QueryList<any>;
  @ViewChild("child") childview!:ChildrenComponent;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    console.log(this.paragraph);
    this.paragraph.nativeElement.style.color="red";
    console.log(this.plural);
    this.plural.first.nativeElement.style.color="green";
    this.plural.last.nativeElement.style.color="blue";
  }
  inc(){
    this.childview.increment();
  }
  dec(){
    this.childview.decrement();
  }
  function(e:any) {
    this.colour=e.target.value;
    console.log(this.colour)
  }

}
