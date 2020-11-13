import React,  {useState} from 'react';
import './style/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import data from './util';


function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong = {currentSong}/>
      <Player 
        isPlaying = {isPlaying} 
        setIsPlaying = {setIsPlaying}
        currentSong = {currentSong}
      />
      <Library songs = {songs}/>
    </div>
  );
}

export default App;
