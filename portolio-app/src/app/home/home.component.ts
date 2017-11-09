import {Component, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(

  ) { }

  public opacityValue: number = 0;
  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.opacityValue = window.pageYOffset/(600);
    if(this.opacityValue > 0.4) this.opacityValue = 0.4;
    if(this.opacityValue < 0) this.opacityValue = 0;
  }

}
