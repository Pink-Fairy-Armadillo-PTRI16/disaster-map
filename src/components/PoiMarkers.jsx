import React from "react";
import { AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "../actions/actions";

// const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

const PoiMarkers = (props /*:{pois: Poi[]}*/) => {
  const locations = useSelector((store) => store.maps.locations);
  const selectedMarker = useSelector((store) => store.maps.selectedMarker);
  const limit = useSelector((store) => store.maps.limit);
  const filters = useSelector((store) => store.maps.filters);
  const dispatch = useDispatch();

  const fetchInfo = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/mongo?limit=${limit}&filters=${filters}`
      );
      const data = await response.json();
      //console.log(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchQuake = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/mongo/quake`);
      const data = await response.json();
      //console.log(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    async function mapStuff() {
      let apiCalls = 0;
      const rawData = await fetchInfo();
      apiCalls++;
      console.log("rawData useEffect:", rawData);
      const newLocations = rawData.map((el, i) => {
        return {
          key: el._id,
          title: el.title,
          date: el.geometries[0].date.substring(0, 10),
          type: el.categories[0].title.toLowerCase(),
          link: el.sources[0].url,
          location: {
            lat: el.geometries[0].coordinates[1],
            lng: el.geometries[0].coordinates[0],
          },
        };
      });
      //QUAKE DATA
      let quakeData;
      filters.includes("Earthquakes")
        ? (quakeData = await fetchQuake())
        : (quakeData = []);
      if (quakeData.length) apiCalls++;
      console.log("quakeData useEffect:", quakeData);
      const newQuakeLocations = quakeData.map((el) => {
        return {
          key: el.id,
          title: el.title,
          date: new Date(Number(el.date)).toISOString().slice(0, 10),
          type: "earthquakes",
          link: el.url,
          location: { lat: el.coordinates[1], lng: el.coordinates[0] },
        };
      });
      const finalLocations = newLocations
        .slice(0, limit / apiCalls)
        .concat(newQuakeLocations.slice(0, limit / apiCalls));

      //setLocation(newLocations);
      console.log("newLocations after concat: ", finalLocations);
      dispatch(actions.setLocationsActionCreator(finalLocations));
    }
    mapStuff();
    //rawData is parsed into a new locations array
    //new locations array is dispatched to reduce
    //state is reset and app is refreshed

    // const locations = [];
  }, [limit, filters]);

  return (
    <div>
      {locations.map((poi) => {
        let image = "";
        let color = "";
        let newClass = "info-window";
        switch (poi.type) {
          case "wildfires":
            image = "https://media.tenor.com/vxFNoJHV3I4AAAAM/chiquichico.gif";
            color = "red";
            newClass = "fire-window";
            break;
          case "earthquakes":
            image = "https://media.tenor.com/bt1f0dpRBq4AAAAM/toad-kinopio.gif";
            color = "#964B00";
            newClass = "earth-window";
            break;
          case "severe storms":
            image =
              "https://media1.tenor.com/m/DAFlmuvQi4kAAAAC/wind-windy.gif";
            color = "lightblue";
            newClass = "storm-window"
            break;
          case "floods":
            image =
              "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXI0cnNtczg4bm5pYmd6cmZocGxyYWdlNHhvaW1zejl5cjNucXNpMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEduUkEf0uuUYBkYg/giphy.gif";
            color = "blue";
            break;
          case "volcanoes":
            image =[
              "https://media1.tenor.com/m/QobNiLZH5ZMAAAAC/spongebob-squidward.gif",
              "https://media1.tenor.com/m/VbSXTPWtxzkAAAAC/i-lava-you-pixar.gif",
            ];
            color = "yellow";
            newClass= "volcano-window";
            break;
          case "sea and lake ice":
            image =
              "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWIweTZpeWd6MnV3d3JheTJoeHRpb3FrMm9pbXgzZ2psbGt6cnpmZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10N782ExqDjCLK/giphy.gif";
            color = "purple";
            newClass = "ice-window";
            break;
          case "drought":
            image =
              "https://media.tenor.com/VU-_K1MP--cAAAAM/hellocaps-hellocapsartisan.gif";
            color = "lightyellow";
            break;
          case "dust and haze":
            image = "https://media.tenor.com/oJZqD2x7K6EAAAAM/yell.gif";
            color = "gray";
            break;
          case "landslides":
            image = "https://i.makeagif.com/media/3-24-2023/xuIEUL.gif";
            color = "lightbrown";
            break;
          case "manmade":
            image = "https://i.makeagif.com/media/9-16-2015/VHMBlJ.gif";
            color = "darkgray";
            break;
          case "snow":
            image =
              "https://www.icegif.com/wp-content/uploads/2023/11/icegif-16.gif";
            color = "white";
            break;
          case "water color":
            image = "https://media.tenor.com/_9miUoHCkF0AAAAM/falls-water.gif";
            color = "pink";
            break;
          case "temperature extremes":
            image =
              "https://media.tenor.com/2DrXCaOGEVoAAAAM/the-simpsons-animation.gif";
            color = "teal";
            break;
          default:
            //
            break;
        }
        return (
          <>
            <AdvancedMarker
              key={poi.key}
              position={poi.location}
              onClick={() => {
                dispatch(actions.setMarkerActionCreator(poi.key));
                // console.log("etarget",e);
                console.log(poi.key);
              }}
            >
              <Pin
                background={color}
                glyphColor={"#000"}
                borderColor={"#000"}
              />
              {/* <img src ={img} width={32} height={32}/> */}
            </AdvancedMarker>

            {poi.key === selectedMarker && (
              <InfoWindow
                className={newClass}
                position={poi.location}
                onClose={() => {
                  dispatch(actions.setMarkerActionCreator(""));
                }}
                shouldFocus={true}
              >
                <h2>{poi.title}</h2>
                <h4>{poi.date}</h4>
                <p>{poi.type}</p>
                <a href={poi.link}>{poi.link}</a>
                <img src={Array.isArray(image) ? image[Math.ceil(Math.random() * image.length - 1)] : image} />
              </InfoWindow>
            )}
          </>
        );
      })}
    </div>
  );
};

export default PoiMarkers;
