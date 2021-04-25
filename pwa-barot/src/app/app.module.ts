import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanCodesComponent } from './components/scan-codes/scan-codes.component';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MainMenuComponent } from './components/pages/main-menu/main-menu.component';
import { QrCodeComponent } from './components/pages/qr-code/qr-code.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ListenTrackComponent } from './components/views/listen-track/listen-track.component';
import { WatchVideoComponent } from './components/views/watch-video/watch-video.component';
import { FxFadeinoutComponent } from './components/fx/fx-fadeinout/fx-fadeinout.component';
import { FxSpinningComponent } from './components/fx/fx-spinning/fx-spinning.component';
import { NavMapComponent } from './components/pages/nav-map/nav-map.component';
import { PuzzlePiecesComponent } from './components/pages/puzzle-pieces/puzzle-pieces.component';

import * as Hammer from 'hammerjs';
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ScanCodesComponent,
    MainMenuComponent,
    QrCodeComponent,
    ListenTrackComponent,
    WatchVideoComponent,
    FxFadeinoutComponent,
    FxSpinningComponent,
    NavMapComponent,
    PuzzlePiecesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarecodeScannerLivestreamModule,
    HammerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
