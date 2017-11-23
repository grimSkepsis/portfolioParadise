import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @ViewChild('contentWrapper') carouselContent: ElementRef;

  private _carouselContentArray: HTMLElement[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    for (let i = 0; i < this.carouselContent.nativeElement.children.length; i++) {
      this._carouselContentArray.push(this.carouselContent.nativeElement.children.item(i));
    }
  }

  public next(): void {
    let visibleIndex: number = this.findVisibleIndex();

    this._carouselContentArray[visibleIndex].classList.remove('visible');
    visibleIndex++;
    if (visibleIndex === this._carouselContentArray.length) visibleIndex = 0;
    this._carouselContentArray[visibleIndex].classList.add('visible');
  }

  public previous(): void {
    let visibleIndex: number = this.findVisibleIndex();
    this._carouselContentArray[visibleIndex].classList.remove('visible');
    visibleIndex--;
    if (visibleIndex < 0) visibleIndex = this._carouselContentArray.length - 1;
    this._carouselContentArray[visibleIndex].classList.add('visible');
  }

  private findVisibleIndex(): number {
    return this._carouselContentArray.findIndex((element: HTMLElement) => {
      return element.classList.contains('visible');
    });
  }
}
