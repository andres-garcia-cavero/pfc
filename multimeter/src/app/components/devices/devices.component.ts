import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElectronService } from 'ngx-electron';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ConfigService } from '../../services/config/config.service';
import { ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

osInfo : string = 'Loading OS...';
folderInfo : string = 'Loading Folder...';

_id: string;
private sub: any;

devices: any;
device : any = {
  _id: '',
  data: {
    description: ''
  }
};

  constructor(private route: ActivatedRoute,  private _electronService: ElectronService, private _configService: ConfigService, private _applicationRef: ApplicationRef) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       //this.id = +params['id']; // (+) converts string 'id' to a number
       this._id = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    this.devices = this._configService.get('devices');
    this.device = this.devices.find(item => item._id === this._id);
    console.log(this.device);

       });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateDeviceData () {
    console.log('mm > updating-device-data');
    this._electronService.ipcRenderer.send('update-device-data', this._id);
    this._electronService.ipcRenderer.on('update-device-data____response', (event, argument) => {
      console.log('response received');
      console.log(argument);
      this._applicationRef.tick();
    });
  };

}
