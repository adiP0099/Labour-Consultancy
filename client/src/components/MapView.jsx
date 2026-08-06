import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMap } from "react-leaflet";
import axios from "axios";

function ChangeMapView({ center }) {
  const map = useMap();

  map.setView(center, map.getZoom());

  return null;
}

function LocationMarker({ position, setPosition }) {

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return (
    <Marker position={position}>
      <Popup>
        Selected Location
        <br />
        Latitude: {position.lat.toFixed(6)}
        <br />
        Longitude: {position.lng.toFixed(6)}
      </Popup>
    </Marker>
  );
}

const MapView = () => {

  const [position, setPosition] = useState({
    lat: 18.5204,
    lng: 73.8567,
  });

  const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    },
    (error) => {
      alert("Unable to get your location.");
      console.error(error);
    }
  );
};

const saveLocation = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.put(
      "http://localhost:5000/api/users/location",
      {
        latitude: position.lat,
        longitude: position.lng,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(response.data.message);
  } catch (error) {
    console.log(error);
    alert("Failed to save location");
  }
};

  return (
    <>
    <button
        onClick={getCurrentLocation}
        style={{
        marginBottom: "20px",
        padding: "10px 20px",
        background: "#0d6efd",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        }}
    >📍 Use My Current Location
    </button>
      <MapContainer
        center={position}
        zoom={13}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "15px",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ChangeMapView center={position} />

        <LocationMarker
          position={position}
          setPosition={setPosition}
        />
      </MapContainer>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#f5f5f5",
          borderRadius: "10px",
        }}
      >
        <h3>Selected Coordinates</h3>

        <p>
          <strong>Latitude:</strong> {position.lat}
        </p>

        <p>
          <strong>Longitude:</strong> {position.lng}
        </p>
        <button onClick={saveLocation}
            style={{
                marginTop: "20px",
                padding: "12px 30px",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
            }}>Save Location
        </button>
      </div>
    </>
  );
};

export default MapView;