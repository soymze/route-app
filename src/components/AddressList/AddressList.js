import React, { useState, useEffect } from 'react';

function AddressList() {
  const [addresses, setAddresses] = useState([]); // Başlangıçta boş bir dizi

  // Adres verilerini alacak bir useEffect
  useEffect(() => {
    fetchAddresses(); // Veriyi al
  }, []);

  // Adresleri almak için bir API çağrısı
  const fetchAddresses = async () => {
    try {
      // Bu örnekte sabit bir listeyi kullanıyoruz.
      const response = await fetch('api/addresses'); // Gerçek API çağrısını burada yapmalısınız.
      const data = await response.json();
      setAddresses(data); // Adres verisini state'e kaydet
    } catch (error) {
      console.error('Adresler alınamadı', error); // Hata durumunda
    }
  };

  return (
    <div>
      {Array.isArray(addresses) && addresses.length > 0 ? (
        addresses.map((address, index) => (
          <p key={index}>{address}</p>
        ))
      ) : (
        <p>Adresler bulunamadı.</p> // Eğer adresler yoksa bu mesajı göster
      )}
    </div>
  );
}

export default AddressList;
