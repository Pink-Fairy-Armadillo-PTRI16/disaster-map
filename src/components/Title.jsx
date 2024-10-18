import React from 'react';
import { useSelector } from 'react-redux';

const Title = () => {

  const title = useSelector(store => store.maps.title);

  return (
    <div>
      <h1>
        <center>
          Disaster Map
        </center>
      </h1>
      <h4>
        <center>
          {title}
        </center>
      </h4>
    </div>
  )
}

export default Title;