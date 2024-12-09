import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 41.0082,  // İstanbul'un koordinatları
  lng: 28.9784,
};

function Map({ markerPosition }) {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyDKncdOE9IrUkyrm-VmOdiT9XL59lZOyCg">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          {markerPosition && (
            <Marker position={markerPosition} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
