import { Component, OnInit } from '@angular/core';

declare var Html5Qrcode;

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {
  
  cameraId: string;
  scanner: any;
  devices: CameraDevice[];
  code: string;

  constructor() { }

  ngOnInit(): void {
    Html5Qrcode.getCameras().then(devices => {
      /**
       * devices would be an array of objects of type:
       * { id: "id", label: "label" }
       */
      console.log('devices', devices);
      if (devices && devices.length) {
        this.devices = devices;
        // .. use this to start scanning.
      }
    }).catch(err => {
      console.log(err);
      // handle err
    });
  }

  startCamera(device: CameraDevice) {
    this.scanner = new Html5Qrcode("reader");
    this.scanner.start(
      device.id,     // retreived in the previous step.
      {
        fps: 2,     // sets the framerate to 10 frame per second
        qrbox: 250  // sets only 250 X 250 region of viewfinder to
                    // scannable, rest shaded.
      },
      qrCodeMessage => {
        // do something when code is read. For example:
        console.log(`QR Code detected: ${qrCodeMessage}`);
        this.code = qrCodeMessage;
      },
      errorMessage => {
        // parse error, ideally ignore it. For example:
        // console.log(`QR Code no longer in front of camera.`);
      })
    .catch(err => {
      // Start failed, handle it. For example,
      console.log(`Unable to start scanning, error: ${err}`);
    });
  }

}

class CameraDevice {
  id: string;
  label: string;
}