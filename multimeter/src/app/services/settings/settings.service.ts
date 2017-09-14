import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

interface SettingsModel {
  [id: string]: any;
}


@Injectable()
export class SettingsService {

  config : any = { };

  constructor (private http:Http) {
    this.serviceInit();
  };

  serviceInit() {

    this.http.get('assets/data.json').subscribe(
      res => {this.config = res.json();
        //console.log('multimeter: config loaded');
        //console.log(this.config);
      }
    );
  };


  get(key:string) {
      return this.config[key];
  };

  set(key:string, value:any) {
    this.config[key] = value;
    console.log(value);
  };

    //settingsModel: SettingsModel = data;
}
