import React from 'react';
import { useSelector } from 'react-redux';

const Title = () => {

  const title = useSelector(store => store.maps.title);

  return (
    <div>
      <h1>
        <center>
          {title}
        </center>
      </h1>
    </div>
  )
}

export default Title;