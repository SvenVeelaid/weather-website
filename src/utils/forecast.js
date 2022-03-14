const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=653228014c2bfe93c7e77aabb97554f3&query=" + latitude + "," + longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect!");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      callback(undefined, body.current.temperature);
    }
  });
};

module.exports = forecast;
