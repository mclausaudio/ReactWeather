var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function(){
    // pass in variables from state object
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
          return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
          return <WeatherMessage temp={temp} location={location}/>;
      }
    };

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-centered">Get Weather</h1>
        {/* pass in handleSearch() by assigning it to a prop called onSearch*/}
        <WeatherForm onSearch={this.handleSearch}/>
        {/* pass in variables to component by adding them as properties */}
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
