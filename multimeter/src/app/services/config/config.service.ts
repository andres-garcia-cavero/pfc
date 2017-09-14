import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import { Response } from '@angular/http';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class ConfigService {

    private _config: any;
    private _config2: any;

    json: any = {"data": "not yet :("};

    constructor(private _electronService: ElectronService, private http: Http){}

    electron():any {

    };

    load(): Promise<boolean> {

      var promise =
        new Promise((resolve) => {
            this._electronService.ipcRenderer.send('load-config', 'init');
            this._electronService.ipcRenderer.on('load-config_response', (event, arg) => {
              this._config = JSON.parse(arg);
              //console.log(this._config);
              resolve('yes');
            });
        })
        .then(
          () => { return true; }
        );

        return promise;

     };

    get(key:string) {
        return this._config[key];
    };

    set(key:string, value:any) {
      this._config[key] = value;
      //console.log('change name>'+value);
      //console.log(this._config);
      // save to file
      this._electronService.ipcRenderer.send('save-config', this._config);
      this._electronService.ipcRenderer.on('save-config_response', (event, arg) => {
        //this._config = JSON.parse(arg);
        //console.log('mm>saved-config');
        //resolve('yes');
      });
    };

}
