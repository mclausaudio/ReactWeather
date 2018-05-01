var React = require('react');
var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
      e.preventDefault();
      //pulling info from input in form
      var location = this.refs.location.value;
        if (location.length > 0) {
          //clear input
          this.refs.location.value = "";
          //function below is in parent component
          this.props.onSearch(location);
        }
    },
    render: function(){
      return (
        <div>
            <form onSubmit={this.onFormSubmit}>
              <input type="text" ref="location"/>
              <button>Get Weather</button>
            </form>
        </div>
      );
    }
});

module.exports = WeatherForm;
