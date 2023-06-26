import { FC } from 'react';
import './App.css';
import { PlacesProvider, MapProvider } from './context';
import { HomeScreen } from './screens';

import './styles.css';

const App:FC = () => {

  navigator.geolocation.getCurrentPosition(coord => console.log({coord}))

  return (
    <PlacesProvider>
       <MapProvider>
          <h1  style={{ position:'absolute', top: '20px'}}>Mapas App</h1>
          <HomeScreen />
       </MapProvider>
    </PlacesProvider>
  );
}

export default App;
