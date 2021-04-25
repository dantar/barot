import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/pages/main-menu/main-menu.component';
import { NavMapComponent } from './components/pages/nav-map/nav-map.component';
import { PuzzlePiecesComponent } from './components/pages/puzzle-pieces/puzzle-pieces.component';
import { QrCodeComponent } from './components/pages/qr-code/qr-code.component';

const routes: Routes = [
  {path: '', component: MainMenuComponent},
  {path: 'menu', component: MainMenuComponent},
  {path: 'qrcode', component: QrCodeComponent},
  {path: 'nav', component: NavMapComponent},
  {path: 'puzzle', component: PuzzlePiecesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
