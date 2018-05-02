var React = require('react');
//pass in variables from parent component
//can de structure and define within the function parameters
var WeatherMessage = ({temp, location}) => { 
  // the line below is defined in the line above
  // var {temp, location} = props;
  return (
    <h1>It's {temp} degress in {location}</h1>
  );
}

module.exports = WeatherMessage;
