const request = require('request');
export const req = request('http://www.google.com', function (error:any, response:any, body:any) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});