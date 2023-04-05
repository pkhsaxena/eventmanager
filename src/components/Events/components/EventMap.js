// import React, { useEffect, useState } from "react";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// import Popup from "react-map-gl-popup";
mapboxgl.accessToken =
  "pk.eyJ1IjoibXVuaXNodCIsImEiOiJjbGZ3emo5ZnowN2FyM2RtYjRmcXcxeHNpIn0.-ALSjoX9k22mvEaCl3RBKQ";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(89.86);
  const [lat, setLat] = useState(26.96);
  const [zoom, setZoom] = useState(15);
  //   const [address, setAddress] = useState(eventAddress);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    //add navigation control (the +/- zoom buttons)
    map.current.addControl(new mapboxgl.NavigationControl());
  });

  //mark the location
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize

    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);
  }, [lng, lat]);

  return (
    <div>
      <div ref={mapContainer} style={{ height: "400px"}} />
    </div>
  );
};

export default Map;
