let args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

request(args[0], (error, response, body) => { // Print the HTML for the Google homepage.
  console.log(body);
  fs.writeFile(args[1], body, (err) => {
    if (err) throw err;
    fs.stat(args[1], function(err, stats) {
      console.log("Downloaded and saved ", stats.size, " bytes to ", args[1]);
    });
  });
});













