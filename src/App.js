import React,  {useState, useRef} from 'react';
import './style/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import data from './util';


function App() {
  const audioRef = useRef(null)
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0})

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration: duration});
}
  return (
    <div className="App">
      <Song currentSong = {currentSong}/>
      <Player 
        audioRef = {audioRef}
        isPlaying = {isPlaying} 
        setIsPlaying = {setIsPlaying}
        currentSong = {currentSong}
        setSongInfo = {setSongInfo}
        songInfo = {songInfo}
      />
      <Library 
        audioRef = {audioRef} 
        isPlaying = {isPlaying}
        setCurrentSong = {setCurrentSong} 
        songs = {songs}
        setSongs = {setSongs}
      />
      <audio 
                onTimeUpdate = {timeUpdateHandler} 
                onLoadedMetadata = {timeUpdateHandler}
                ref = {audioRef} 
                src = {currentSong.audio}
            />
    </div>
  );
}

export default App;
