import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { apiUrlBase } from "../../utils";
import useFetch from "../../utils/useFetch";
import Error from "../../components/error";
import Loading from "../../components/loading";

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
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
  });

  return (
    <section>
      <h2>My Travels</h2>
      <small>Vacation destinations since 2008</small>
      {(travelLoading || !googleMapsLoaded) && <Loading />}
      {travelData && travelData.error && <Error componentName="Travel" />}
      {!travelLoading && travelData && !travelData.error && googleMapsLoaded && (
        <>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: chicago.lat, lng: chicago.lng }}
            zoom={3}
          >
            <>
              <Marker {...chicago} />
              {!!travelData.length &&
                travelData.map((dest) => (
                  <Marker
                    key={`${dest.city}-${dest.state}`}
                    {...dest}
                    content={dest.visits.join("<br />")}
                  />
                ))}
            </>
          </GoogleMap>
          <small>Click the pins for more information</small>
        </>
      )}
    </section>
  );
};

export default React.memo(Travel);
