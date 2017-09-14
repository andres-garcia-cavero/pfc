import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  devices : any = [];
  newDevice : any = {};
  newDeviceId : string = '';


  constructor(private _configService: ConfigService) { }

  ngOnInit() {
    this.devices = this._configService.get('devices');

  }

  addDevice() {
//    console.log(this.newDeviceId);
    this.newDevice = {
      "_id": this.newDeviceId
    }
    this.devices.push(this.newDevice);
    this.devices = this._configService.set('devices', this.devices);
  }

}
