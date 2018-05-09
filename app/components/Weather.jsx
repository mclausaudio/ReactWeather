var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);

    });
  },
  render: function(){
    // pass in variables from state object
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
          return <h3 className="text-centered">Fetching weather...</h3>;
      } else if (temp && location) {
          return <WeatherMessage temp={temp} location={location}/>;
      }
    };

    return (
      <div>
        <h1 className="text-centered">Get Weather</h1>
        {/* pass in handleSearch() by assigning it to a prop called onSearch*/}
        <WeatherForm onSearch={this.handleSearch}/>
        {/* pass in variables to component by adding them as properties */}
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
