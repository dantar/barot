import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-scan-codes',
  templateUrl: './scan-codes.component.html',
  styleUrls: ['./scan-codes.component.scss']
})
export class ScanCodesComponent implements OnInit, AfterViewInit {

  codes: string[];

  @ViewChild('barcodescanner') barcodescanner: BarecodeScannerLivestreamComponent;

  constructor() { }

  ngAfterViewInit(): void {
    this.barcodescanner.start();
  }

  ngOnInit(): void { 
    this.codes = [];
  }

  oneMoreScan(result: any){
    console.log('scan', result);
    let code = result.codeResult.code;
    if (!this.codes.includes(code)) {
      this.codes.push(code);
    }
  }

  onStarted(started: any){
      console.log('started', started);
  }

}
