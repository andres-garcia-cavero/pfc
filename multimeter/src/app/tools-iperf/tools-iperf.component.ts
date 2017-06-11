import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools-iperf',
  templateUrl: './tools-iperf.component.html',
  styleUrls: ['./tools-iperf.component.scss']
})
export class ToolsIperfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  this.updateCommand();
  }



  clientCommand: string = 'iperf';
  serverCommand: string = 'iperf';
  host: string = '';
  time: number = 10;
  interval : number = 1;
  udp : boolean = true;
  port : number = 5001;
  interface : string = '';

  updateCommand () {

this.clientCommand = 'iperf';
this.clientCommand += ' --client ' + this.host;
this.clientCommand+= ' --time ' + this.time;
this.clientCommand += ' -i ' + this.interval;
this.clientCommand += ' --port ' + this.port;
this.clientCommand += ' --bind  ' + this.interface;
if (this.udp) this.clientCommand += ' -u ';


this.serverCommand = 'iperf --server ';
this.serverCommand += ''



}


}
