import './App.css';
import AddressList from './components/AddressList/AddressList.js';
import Header from './components/Header/Header.js';
import Input from './components/Input/Input.js';
import Map from './components/Map/Map.js';
import { useState } from 'react';

function App() {
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleAddAddress = async (address) => {
    const geocoder = new window.google.maps.Geocoder();

    // Adresi geocode et
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        // İlk sonucu al ve koordinatları çıkar
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        setMarkerPosition({ lat, lng }); // İşaretçiyi bu koordinatla güncelle
      } else {
        console.error("Adres bulunamadı:", status);
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <AddressList />
        {/* Input bileşenine onAddAddress fonksiyonunu geçiriyoruz */}
        <Input onAddAddress={handleAddAddress} />
        {/* Harita bileşenine markerPosition prop'u gönderiyoruz */}
        <Map markerPosition={markerPosition} />
      </header>
    </div>
  );
}

export default App;
