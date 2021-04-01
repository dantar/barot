import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-scan-codes',
  templateUrl: './scan-codes.component.html',
  styleUrls: ['./scan-codes.component.scss']
})
export class ScanCodesComponent implements OnInit, AfterViewInit {

  codes: string[];
  counts: {[code: string]: number}

  @ViewChild('barcodescanner') barcodescanner: BarecodeScannerLivestreamComponent;

  constructor() { }

  ngAfterViewInit(): void {
    this.barcodescanner.start();
  }

  ngOnInit(): void { 
    this.codes = [];
    this.counts = {};
  }

  oneMoreScan(result: any){
    console.log('scan', result.codeResult.code);
    let code = result.codeResult.code;
    if (this.codes.includes(code)) {
      this.counts[code] = this.counts[code] +1;
    } else {
      this.codes.push(code);
      this.counts[code] = 1;
    }
  }

  onStarted(started: any){
      console.log('started', started);
  }

}
