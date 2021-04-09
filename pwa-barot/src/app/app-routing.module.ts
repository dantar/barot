import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/pages/main-menu/main-menu.component';
import { ScanCodesComponent } from './components/scan-codes/scan-codes.component';


const routes: Routes = [
  {path: '', component: MainMenuComponent},
  {path: 'menu', component: MainMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
