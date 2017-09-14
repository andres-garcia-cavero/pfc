const path = require('path');
const url = require('url');
const fs = require('fs');
const nodeSSH = require('node-ssh');
const ssh = new nodeSSH();
const os = require('os');

module.exports = {
  test: function() {
    //console.log("HELLO");
    var datosObt = {
      field1: "1",
      field2: "2",
      field3: "3",
      field4: "4"
    };


    ssh.connect({
      host: '155.210.157.171',
      username: 'pi',
      password: 'proyecto'
    })
    .then(function() {
      ssh.execCommand('ping www.google.com -c 7', { cwd:'/home/pi/andres/' }).then(function(result) {
        console.log(result);
      return result;
        //event.sender.send('launch-test_response', result);
    //      console.log('RESULT: ' + result)
    //    console.log('STDOUT: ' + result.stdout)
      //  console.log('STDERR: ' + result.stderr)
      });
    });

  }

};
/*

console.log('launch-test: ' + arg)  // prints "ping"
//  var config = fs.readFileSync('config.json', 'utf8');
var results = 'resultados del test';

ssh.connect({
  host: '155.210.157.171',
  username: 'pi',
  password: 'proyecto'
})
.then(function() {
  ssh.execCommand('ping www.google.com -c 7', { cwd:'/home/pi/andres/' }).then(function(result) {


    event.sender.send('launch-test_response', result);
//      console.log('RESULT: ' + result)
//    console.log('STDOUT: ' + result.stdout)
  //  console.log('STDERR: ' + result.stderr)
  });
});*/
