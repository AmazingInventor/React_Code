import React from 'react';
import WeatherDisplay from './screens/WeatherDisplay.tsx';



export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <WeatherDisplay />
    </div>
  );
}
