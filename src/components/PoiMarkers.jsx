import React from "react";
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";



// const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

const PoiMarkers = (props/*:{pois: Poi[]}*/) => {
    //check props.poi.types
    //if then make fetch request to database of images
    //set img based on database call
    
    // let img = '';
    // switch(props.poi.type){
    //   case 'wildfire':
    //     img = "https://media.tenor.com/vxFNoJHV3I4AAAAM/chiquichico.gif";
    //     break;
    //   case 'earthquake':
    //     // 
    //     break;
    //   default:
        
    //     break;
    // }

    //const img = "https://media.tenor.com/vxFNoJHV3I4AAAAM/chiquichico.gif";
  return (
    <div>
        
      {props.pois.map( (poi) => {
        let img = '';
        switch(poi.type){
          case 'wildfire':
            img = "https://media.tenor.com/vxFNoJHV3I4AAAAM/chiquichico.gif";
            break;
          case 'earthquake':
            img = "https://media.tenor.com/bt1f0dpRBq4AAAAM/toad-kinopio.gif"
            break;
          default:
            // 
            break;
        }
        return(
          <AdvancedMarker key={poi.key} position={poi.location}>
          {/* <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'}/> */}
          <img src ={img} width={32} height={32}/>
          </AdvancedMarker>
        )
      }
        
      )}
    </div>
  );
};

export default PoiMarkers;