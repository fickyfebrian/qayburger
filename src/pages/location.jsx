import React from 'react';
import Footer from '../component/layout/footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Buat data URL dari SVG ikon
const svgIcon = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="48px" height="48px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
`);

const customIcon = new L.Icon({
  iconUrl: `data:image/svg+xml,${svgIcon}`,
  iconSize: [48, 48], // ukuran ikon
  iconAnchor: [24, 48], // titik di mana ikon di-anchor
  popupAnchor: [0, -48], // titik di mana popup di-anchor relatif terhadap ikon
});

const Location = () => {
  const bandungPosition = [-6.9175, 107.6191];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full h-full">
          <MapContainer center={bandungPosition} zoom={14} className="w-[90vh] h-[70vh]">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={bandungPosition} icon={customIcon}>
              <Popup>
                Qayemi Burger Bandung Store
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
