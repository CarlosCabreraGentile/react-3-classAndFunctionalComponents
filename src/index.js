import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //With the constructor we initialize the state
  constructor(props) {
    //super function it´s related with the React.Component base class
    super(props);

    this.state = {
      lat: null
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //Called setState to update state
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => console.log(err)
    );
  }

  //React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
