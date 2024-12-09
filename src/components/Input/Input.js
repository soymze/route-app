import React, { useState } from 'react';

function Input({ onAddAddress }) {
  const [address, setAddress] = useState('');

  const handleAdd = () => {
    // Adresi onAddAddress fonksiyonuna gönderiyoruz
    onAddAddress(address);
    setAddress(''); // Adres alanını temizliyoruz
  };

  return (
    <div className="Input-container">
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter an address"
      />
      <button onClick={handleAdd}>Add Address</button>
    </div>
  );
}

export default Input;
