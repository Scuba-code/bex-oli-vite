import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState, useRef } from 'react';
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
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const mapRef = useRef(null);

  const addMarker = (latlng) => {
    setMarkers([...markers, { id: Date.now(), position: latlng, title: '', description: '' }]);
  };

  const searchLocations = async () => {
    if (!query) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error(err);
    }
  };

  const selectResult = (lat, lon) => {
    if (mapRef.current) {
      mapRef.current.setView([parseFloat(lat), parseFloat(lon)], 10);
    }
    setResults([]);
    setQuery('');
  };

  const updateMarker = (id, data) => {
    setMarkers(markers.map((m) => (m.id === id ? { ...m, ...data } : m)));
  };

  const removeMarker = (id) => {
    setMarkers(markers.filter((m) => m.id !== id));
  };

  return (
    <div>
      <div className="mb-2 relative">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search location"
          className="border p-1 w-full text-sm"
          onKeyDown={(e) => e.key === 'Enter' && searchLocations()}
        />
        {results.length > 0 && (
          <ul className="absolute z-10 bg-white border w-full max-h-40 overflow-auto">
            {results.map((r) => (
              <li
                key={r.place_id}
                className="p-1 cursor-pointer hover:bg-gray-100 text-sm"
                onClick={() => selectResult(r.lat, r.lon)}
              >
                {r.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '24rem', width: '100%' }} ref={mapRef}>
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
    </div>
  );
}
