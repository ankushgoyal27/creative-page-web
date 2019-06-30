import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  result: any;
  constructor(private landingService:LandingService) { }

  ngOnInit() {
    this.result = this.landingService.getStories();
  }
}
