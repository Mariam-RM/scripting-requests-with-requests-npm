var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Message: ', response.statusMessage);
         console.log('Content type: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4



// Create a new .js file and using request, make a 'GET' request to 'https://sytantris.github.io/http-examples/future.jpg' using chaining. The chain should:
// Use .on('error') to handle any errors
// Use .on('response') to log the HTTPS response code, response message (response.statusMessage) and content type (response.headers['content-type'])
// Use piping and fs.createWriteStream to save the file to your working directory ('./future.jpg')
// Considerations:

// If you wanted to improve user experience, you might wish to let the user know what is happening, perhaps with two console.log statements:
// console.log('Downloading image...');
// console.log('Download complete.');
// Since we know request is asynchronous, where would you insert those console.log statements to ensure they occur in order and at the right time? Give it a try!
// Although you have a good spot to place the 'downloading' statement, if you tried logging 'complete' after the .pipe, what did you notice?
// How could you solve this? We know request is a stream, and streams generally respond to a certain four functions (see the previous exercise if you don't remember) - which function could you chain to mark the end of a writable stream?