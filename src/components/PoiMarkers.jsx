import React from "react";
import { AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from "react";
import * as actions from '../actions/actions';



// const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

const PoiMarkers = (props /*:{pois: Poi[]}*/) => {
  const locations = useSelector(store => store.maps.locations)
  const selectedMarker = useSelector(store => store.maps.selectedMarker);
  const limit = useSelector(store => store.maps.limit);
  const filters = useSelector(store => store.maps.filters);
  const dispatch = useDispatch();
  // let locations = [];
  // const [currLocation, setLocation] = useState(locations);

  // const locations = [ // for later, it will be database.body
  //     {key: 'operaHouse', type: 'wildfire', location: { lat: -33.8567844, lng: 151.213108  }},
  //     {key: 'tarongaZoo', type: 'earthquake', location: { lat: -33.8472767, lng: 151.2188164 }},
  //     {key: 'manlyBeach', type: 'wildfire', location: { lat: -33.8209738, lng: 151.2563253 }},
  //     {key: 'hyderPark', type: 'wildfire', location: { lat: -33.8690081, lng: 151.2052393 }},
  //     {key: 'theRocks', type: 'wildfire', location: { lat: -33.8587568, lng: 151.2058246 }},
  //     {key: 'circularQuay', type: 'wildfire', location: { lat: -33.858761, lng: 151.2055688 }},
  //     {key: 'harbourBridge', type: 'wildfire', location: { lat: -33.852228, lng: 151.2038374 }},
  //     {key: 'kingsCross', type: 'wildfire', location: { lat: -33.8737375, lng: 151.222569 }},
  //     {key: 'botanicGardens', type: 'wildfire', location: { lat: -33.864167, lng: 151.216387 }},
  //     {key: 'museumOfSydney', type: 'wildfire', location: { lat: -33.8636005, lng: 151.2092542 }},
  //     {key: 'maritimeMuseum', type: 'earthquake', location: { lat: -33.869395, lng: 151.198648 }},
  //     {key: 'kingStreetWharf', type: 'earthquake', location: { lat: -33.8665445, lng: 151.1989808 }},
  //     {key: 'aquarium', type: 'earthquake', location: { lat: -33.869627, lng: 151.202146 }},
  //     {key: 'darlingHarbour', type: 'earthquake', location: { lat: -33.87488, lng: 151.1987113 }},
  //     {key: 'barangaroo', type: 'earthquake',  location: { lat: - 33.8605523, lng: 151.1972205 }},
  //   ];

    const fetchInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/mongo?limit=${limit}&filters=${filters}`);
        const data = await response.json();
        //console.log(data);
        return data;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    

  useEffect(() => {

    async function mapStuff(){
      const rawData = await fetchInfo();
      console.log('rawData useEffect:', rawData);
      const newLocations = rawData.map((el,i) =>{
        return {
          key: el._id, 
          title: el.title, 
          date: el.geometries[0].date.substring(0,10), 
          type: el.categories[0].title.toLowerCase(), 
          link: el.sources[0].url, 
          location: {lat: el.geometries[0].coordinates[1] , lng: el.geometries[0].coordinates[0]}
        }
    })
    //setLocation(newLocations);
    console.log(newLocations);
    dispatch(actions.setLocationsActionCreator(newLocations))
    }
    mapStuff();
    //rawData is parsed into a new locations array
    //new locations array is dispatched to reduce
    //state is reset and app is refreshed

    // const locations = [];
  }, [limit, filters])

  // const [markerRef, marker] = useAdvancedMarkerRef();

  // const [infoWindowShown, setInfoWindowShown] = useState(false);

  // // clicking the marker will toggle the infowindow
  // const handleMarkerClick = useCallback(
  //   () => setInfoWindowShown(isShown => !isShown),
  //   []
  // );

  // // if the maps api closes the infowindow, we have to synchronize our state
  // const handleClose = useCallback(() => setInfoWindowShown(false), []);
  

  return (
    <div>
        
      {locations.map( (poi) => {
        let image = '';
        let color = '';
        switch(poi.type){
          case 'wildfires':
            image = "https://media.tenor.com/vxFNoJHV3I4AAAAM/chiquichico.gif";
            color = 'red';
            break;
          case 'earthquake':
            image = "https://media.tenor.com/bt1f0dpRBq4AAAAM/toad-kinopio.gif";
            color = 'brown';
            break;
          case 'severe storms':
            image = "https://media.tenor.com/bt1f0dpRBq4AAAAM/toad-kinopio.gif"
            color = 'lightblue';
            break;
          case 'floods':
            color = 'blue';
            break;
          case 'volcanoes':
            image = "https://cdn.pixabay.com/photo/2024/01/15/17/41/ai-generated-8510610_640.jpg"
            color = 'yellow';
            break;  
          case 'sea and lake ice':
            color = 'purple';
            break;
          case 'drought':
            color = 'lightyellow';
            break;
          case 'dust and haze':
            color = 'gray';
            break;
          case 'landslides':
            color ='lightbrown';
            break;
          case 'manmade':
            color='darkgray';
            break;
          case 'snow':
            color='white';
            break;
          case 'water color':
            color='pink';
            break;
          case 'temperature extremes':
            color='teal';
            break;
            default:
            // 
            break;
        }
        return(
        <>
          <AdvancedMarker key={poi.key} position={poi.location} onClick={() => {
            dispatch(actions.setMarkerActionCreator(poi.key))
            // console.log("etarget",e);
            console.log(poi.key);
            
          }}>
          <Pin background={color} glyphColor={'#000'} borderColor={'#000'}/>
          {/* <img src ={img} width={32} height={32}/> */}
          </AdvancedMarker>

          {poi.key === selectedMarker && (
            <InfoWindow position={poi.location} onClose={() => {dispatch(actions.setMarkerActionCreator(''))}} shouldFocus={true}>
              <h2>{poi.title}</h2>
              <h4>{poi.date}</h4>
              <p>{poi.type}</p>
              <a href={poi.link}>{poi.link}</a>
              <img src={image} />
            </InfoWindow>
          )}
          
        </>
          
        )
      }
        
      )}
    </div>
  );
};

export default PoiMarkers;