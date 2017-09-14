const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');
const nodeSSH = require('node-ssh');
const ssh = new nodeSSH();
const os = require('os');

const {ipcMain} = require('electron');

// Modules
var parser = require('./modules/parser.js');



require('dotenv').config()

let win = null;

app.on('ready', function() {

  //init window
  win = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: false,
    icon: path.join(__dirname, 'icon.png')
  });

  // Specify entry point
  if (process.env.PACKAGE === 'true'){
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL(process.env.HOST);
    // win.webContents.openDevTools();
  }

  //Remove window when app is closed
  win.on('closed', function () {
      win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});


// Start of backend code


ipcMain.on('load-config', (event, arg) => {
  console.log('load-config')  // prints "ping"
  var config = fs.readFileSync('config.json', 'utf8');
  event.sender.send('load-config_response', config);

});



ipcMain.on('save-config', (event, argument) => {
  console.log('saving-config');  // prints "ping"
  console.log(argument);  // prints "ping"
  //var config = fs.readFileSync('config.json', 'utf8');
  //event.sender.send('load-config_response', config);
//  var json = JSON.stringify(argument);
  fs.writeFile('config.json', JSON.stringify(argument,null,4), 'utf8');
});

// Tests
ipcMain.on('launch', (event, argument) => {
  var results = new Promise( (resolve,reject) => {
    var res = modules[argument.method].test();
    resolve(res);
  }).then((data)=>{
    event.sender.send('launch_response', data);
  });
//      console.log('RESULT: ' + result)
//    console.log('STDOUT: ' + result.stdout)
//  console.log('STDERR: ' + result.stderr)


/*  switch (argument.method) {
      case "ping":
        modules.ping.test();
      break;
  }*/
  });

  ipcMain.on('ping', (event, arguments) => {

    console.log(arguments);

    ssh.connect(arguments.src)
    .then(() => {
      console.log(arguments.dst.host);
      var command = 'ping '+arguments.dst.host+' -c 2';
      console.log(command);
      ssh.execCommand(command, { cwd:'/home/pi/andres/' }).then(function(result) {
        console.log(result);
        console.log('volviendo');

        event.sender.send('ping____response', result);
    //      console.log('RESULT: ' + result)
    //    console.log('STDOUT: ' + result.stdout)
      //  console.log('STDERR: ' + result.stderr)
      });
    });

    });

    ipcMain.on('test', (event, arguments) => {

          event.sender.send('test____response', 'nada');
      //      console.log('RESULT: ' + result)
      //    console.log('STDOUT: ' + result.stdout)
        //  console.log('STDERR: ' + result.stderr)
        });

        ipcMain.on('minimize', (event, arguments) => {
          win.minimize();
        });

        ipcMain.on('maximize', (event, arguments) => {
          win.maximize();
        });

        ipcMain.on('restore', (event, arguments) => {
          win.unmaximize();
        });

        ipcMain.on('close', (event, arguments) => {
          win.close();
        });
/*
        ipcMain.on('open-dev-tools', (event, arguments) => {
          win.webContents.openDevTools();
        });
*/
        ipcMain.on('toggle-dev-tools', (event, arguments) => {
          win.webContents.toggleDevTools();
        });

/*
ipcMain.on('update-device-data', (event, id) => {
  var contents = fs.readFileSync('config.json');
  var jsonContent = JSON.parse(contents);
  var devices = jsonContent.devices;
  var device = devices.find(item => item._id === id);
  console.log(device);
  console.log(device.data.connection);


  ssh.connect(device.data.connection)
  .then(() => {
    ssh.execCommand('cat /etc/*-release').then(function(result) {
  //    console.log(result);
      var parsed = JSON.parse(result);
      console.log(parsed);
      var structuredData = parser.deviceData(result);
    });
  });


  event.sender.send('update-device-data____response', 'at your service');
});*/
