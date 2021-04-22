import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/pages/main-menu/main-menu.component';
import { NavMapComponent } from './components/pages/nav-map/nav-map.component';
import { QrCodeComponent } from './components/pages/qr-code/qr-code.component';
import { ScanCodesComponent } from './components/scan-codes/scan-codes.component';


const routes: Routes = [
  {path: '', component: MainMenuComponent},
  {path: 'menu', component: MainMenuComponent},
  {path: 'qrcode', component: QrCodeComponent},
  {path: 'nav', component: NavMapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
