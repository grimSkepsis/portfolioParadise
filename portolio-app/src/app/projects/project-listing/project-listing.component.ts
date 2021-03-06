import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.scss']
})
export class ProjectListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() public rLink: string = "";
  @Input() public projImage: string = "";
  @Input() public projCaption: string = "";
  @Input() public projCaption2: string = "";
  @Input() public projDescription: string = "";
}
