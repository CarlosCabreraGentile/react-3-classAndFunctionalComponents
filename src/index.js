import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //With the constructor we initialize the state
  constructor(props) {
    //super function it´s related with the React.Component base class
    super(props);

    // THIS IS THE ONLY TIME we do direct assigment
    this.state = {
      lat: null,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //Called setState to update state
        this.setState({
          lat: position.coords.latitude
        });
        //NOT TO DO THIS WAY, ONLY WHEN INITIALIZE
        // this.state.lat = position.coords.latitude;
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
