import { Component } from '@angular/core';
import { BackendService } from './backend.service';
import { ElectronService } from 'ngx-electron';
import { ConfigService } from './services/config/config.service';
import { OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BackendService],
  host: {'(window:minimize)':'minimizeWindow($event)'}
})
export class AppComponent implements OnInit {

  title : string = 'Multimeter';
  name : string = 'temp name';
  devices : any = {};
  maximized : boolean = false;


  constructor(private _backendService : BackendService, private _electronService: ElectronService, private _configService: ConfigService) {


  };

  ngOnInit() {
    this.name = this._configService.get('name');
    this.devices = this._configService.get('devices');
    this._configService.set('name','paco');

    var drag = require('electron-drag');
    var clear = drag('#element');
    clear();

  };

  minimize () {
    this._electronService.ipcRenderer.send('minimize','1');
  };

  maximize () {
    this.maximized = true;
    this._electronService.ipcRenderer.send('maximize','1');
  };

  restore () {
    this.maximized = false;
    this._electronService.ipcRenderer.send('restore','1');
  };

  close () {
    this._electronService.ipcRenderer.send('close','1');
  };
/*
  openDevTools () {
    this._electronService.ipcRenderer.send('open-dev-tools','1');
  };
*/
  toggleDevTools () {
    this._electronService.ipcRenderer.send('toggle-dev-tools','1');
  };


}
