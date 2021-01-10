import React from 'react';
import Navbar from '../components/Navbar';
import Landing from './Landing';
import Tone from './Tone';
import Speech from './Speech';
import Recording from './Recording';
import Dashboard from './Dashboard';
import SpeechContext from '../context/speechContext';

function App() {
  return (
    <SpeechContext>
      <Navbar />
      {/* <Landing /> */}
      {/* <Tone /> */}
      <Speech />
      {/* <Recording /> */}
      {/* <Dashboard /> */}
    </SpeechContext>
  );
}

export default App;