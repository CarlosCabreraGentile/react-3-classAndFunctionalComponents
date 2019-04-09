import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //With the constructor we initialize the state
  constructor(props) {
    //super function it´s related with the React.Component base class
    super(props);
  }

  //React says we have to define render!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
