import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-map',
  templateUrl: './nav-map.component.html',
  styleUrls: ['./nav-map.component.scss']
})
export class NavMapComponent implements OnInit {

  position: any;

  constructor() { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.position = position;
      });
    } else {
      this.position = null;
    }
  }
  
}
