import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-testing-lab',
  templateUrl: './testing-lab.component.html',
  styleUrls: ['./testing-lab.component.scss']
})
export class TestingLabComponent implements OnInit {

  arguments : any = {};
  pingResponse : string = 'aqui van los resultados';
  variable = 'lolailo lola';

  constructor(private _electronService: ElectronService, private _applicationRef: ApplicationRef) { }



  ngOnInit() {
  };

test() {

console.log('uno');
  this._electronService.ipcRenderer.send('test', this.arguments);
  this._electronService.ipcRenderer.on('test____response', (event, arg) => {

    console.log('dos');


          this.variable = 'eyyeyeyey';
this._applicationRef.tick();

    });

};

  launchTest() {
    console.log('launch OK');
    this.arguments = {
      src: {
          useConfig: false,
          host: "155.210.157.171",
          username: "pi",
          password: "proyecto"
      },
      dst: {
        useConfig: false,
        host: "www.unizar.es"
      }
    };



    this._electronService.ipcRenderer.send('ping', this.arguments);
    this._electronService.ipcRenderer.on('ping____response', (event, arg) => {

      console.log('this>');
      console.log(this);
      console.log('datos');
//      console.log(JSON.stringify(arg));
  //  this.pingResponse = JSON.stringify(arg);
console.log(this.variable);
this.pingResponse = JSON.stringify(arg);
console.log(this);

this._applicationRef.tick();

      //resolve('yes');
    });

  };

}
