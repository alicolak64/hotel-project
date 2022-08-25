import { useState, useEffect } from 'react';

const App = () => {

  const [hotels, setHotels] = useState([]);

  const fetcData = async () => {

    const response = await fetch('/.netlify/functions/getHotels')
    const responseBody = await response.json()
    setHotels(responseBody.data.hotelData.values)

  }

  useEffect(() => {
    fetcData()
  }, [])

  console.log(hotels)



  return (
    <div >
      <h1>My Hotels</h1>
      {hotels?.map(hotel => (
        <div className='hotel' key={hotel.id}>
          <h2>Hotel Name : <span style={{color : "blue"}}>{hotel.name}</span></h2>
          <h3>Rating : <span style={{color : "blue"}}>{hotel.name}</span></h3>
        </div>
      ))}


    </div>
  );
}

export default App;
