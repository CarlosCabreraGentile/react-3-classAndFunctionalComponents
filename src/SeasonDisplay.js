import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    console.log(month);

    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  let month = new Date().getMonth();
  const season = getSeason(props.lat, month);
  console.log(season);

  return <div>Season Display</div>;
};

export default SeasonDisplay;
