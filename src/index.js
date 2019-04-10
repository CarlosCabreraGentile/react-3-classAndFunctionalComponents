import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: ''
  };

  //This method is used for data loading when component starts
  componentDidMount() {
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

  componentDidUpdate() {
    console.log('UPDATE');
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
