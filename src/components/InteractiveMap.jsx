import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default icon paths so Leaflet markers render correctly
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function AddMarker({ onAdd }) {
  useMapEvents({
    click(e) {
      onAdd(e.latlng);
    },
  });
  return null;
}

export default function InteractiveMap() {
  const [markers, setMarkers] = useState([]);

  const addMarker = (latlng) => {
    setMarkers([...markers, { id: Date.now(), position: latlng, title: '', description: '' }]);
  };

  const updateMarker = (id, data) => {
    setMarkers(markers.map((m) => (m.id === id ? { ...m, ...data } : m)));
  };

  const removeMarker = (id) => {
    setMarkers(markers.filter((m) => m.id !== id));
  };

  return (
    <MapContainer center={[0, 0]} zoom={2} className="h-96 w-full">
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AddMarker onAdd={addMarker} />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>
            <div className="space-y-2">
              <input
                className="border p-1 w-full text-sm"
                placeholder="Title"
                value={marker.title}
                onChange={(e) => updateMarker(marker.id, { title: e.target.value })}
              />
              <textarea
                className="border p-1 w-full text-sm"
                rows="2"
                placeholder="Description"
                value={marker.description}
                onChange={(e) => updateMarker(marker.id, { description: e.target.value })}
              />
              <button
                onClick={() => removeMarker(marker.id)}
                className="text-red-500 underline text-sm"
              >
                Remove
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
