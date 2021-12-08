import React, { useState } from "react";
import { Marker as GoogleMarker, InfoWindow } from "@react-google-maps/api";

const Marker = ({ lat, lng, city, content, circle }) => {
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);
  return (
    <>
      <GoogleMarker
        icon={
          circle
            ? {
                path: window.google.maps.SymbolPath.CIRCLE,
                strokeColor: "green",
                scale: 8,
              }
            : null
        }
        position={{ lat, lng }}
        title={city}
        onClick={() => {
          setInfoWindowVisible(true);
        }}
      />
      {infoWindowVisible && (
        <InfoWindow
          position={{ lat, lng }}
          onCloseClick={() => {
            setInfoWindowVisible(false);
          }}
        >
          <>
            <div>{city}</div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </>
        </InfoWindow>
      )}
    </>
  );
};

export default Marker;
