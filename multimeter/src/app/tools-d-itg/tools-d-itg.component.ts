import { Component, OnInit } from '@angular/core';
import { PipeTransform, Pipe } from '@angular/core';


@Component({
  selector: 'app-tools-d-itg',
  templateUrl: './tools-d-itg.component.html',
  styleUrls: ['./tools-d-itg.component.scss']
})
export class ToolsDItgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.updateDITGCommand();
  }

  updateDITGCommand () {

  }

  logFile : string = '';


}
