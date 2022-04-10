import { MapContainer, TileLayer } from "react-leaflet";
import Geoman from "./Geoman.js";

const Map = () => {
  const position = [48.863247, 2.350747];
  const zoomLv = 13;

  return (
    <MapContainer center={position} zoom={zoomLv} scrollWheelZoom={true}>
      <TileLayer
        url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={20}
      />
      <Geoman />
    </MapContainer>
  );
};

export default Map;
