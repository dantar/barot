import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(public shared: SharedDataService,
    private router: Router) { 
  }

  ngOnInit(): void {
  }

  clickQrCode() {
    this.router.navigate(['qrcode']);
  }

  clickNavMap() {
    this.router.navigate(['nav']);
  }

}
