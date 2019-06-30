import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor() { }

  getStories(){
    return [
      {
        title: "New York",
        imageURL: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        description: "It was the road trip to NYC, Washington DC & Virgina beach"
      },
      {
        title: "New York",
        imageURL: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        description: "It was the road trip to NYC, Washington DC & Virgina beach"
      },
      {
        title: "New York",
        imageURL: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        description: "It was the road trip to NYC, Washington DC & Virgina beach"
      }
    ];
  }
}
