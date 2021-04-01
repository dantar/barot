import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanCodesComponent } from './components/scan-codes/scan-codes.component';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ScanCodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarecodeScannerLivestreamModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
