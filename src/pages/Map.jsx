import InteractiveMap from '../components/InteractiveMap';

export default function Map() {
  return (
    <div className="mt-4 px-4 space-y-4">
      <h2 className="text-3xl font-bold text-center">Interactive Dive Map</h2>
      <p className="text-gray-600 text-center">Click on the map to add a pin. Edit details in the popup or remove the pin.</p>
      <InteractiveMap />
    </div>
  );
}