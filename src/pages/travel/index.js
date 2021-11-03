import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { apiUrlBase } from "../../utils";
import useFetch from "../../utils/useFetch";

import Marker from "./marker";

const containerStyle = {
  width: "700px",
  height: "700px",
};

const chicago = {
  circle: true,
  lat: 41.878114,
  lng: -87.629798,
  city: "Chicago, IL",
  content: "Current Residence",
};

const Travel = () => {
  const { loading: travelLoading, data: travelData } = useFetch(
    `${apiUrlBase}/travel`
  );
  const { isLoaded: googleMapsLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  return googleMapsLoaded && !travelLoading ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: chicago.lat, lng: chicago.lng }}
      zoom={3}
    >
      <>
        <Marker {...chicago} />
        {!!travelData.length &&
          travelData.map((city) => (
            <Marker {...city} content={city.visits.join("<br />")} />
          ))}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Travel);
