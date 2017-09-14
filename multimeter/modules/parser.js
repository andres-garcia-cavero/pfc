const path = require('path');
const url = require('url');
const fs = require('fs');
const nodeSSH = require('node-ssh');
const ssh = new nodeSSH();
const os = require('os');

module.exports = {
  deviceData: (raw) => {
    var json = JSON.parse(raw);

    console.log(json);
    /*
    var lineArray = json.stdout.split("\n");
    var results = {};

    console.log(lineArray.length);
    console.log(lineArray[0]);

  /*  lineArray.forEach((element,index)=>{
      console.log(element);
    });
*/
    return "procesado";
  }

};
