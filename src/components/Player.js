import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons';

const Player = ({audioRef, currentSong, isPlaying, setIsPlaying, songInfo, setSongInfo, songs, setCurrentSong}) => {
    
    
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }        
    }
    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => (song.id === currentSong.id))
        console.log(currentIndex)
        if(direction === 'skip-forward'){
            let nextSong = setCurrentSong(songs[(currentIndex + 1) % songs.length])
        }
        if(direction === 'skip-back'){
            if(currentIndex === 0){
                return setCurrentSong(songs[songs.length-1])
                
            }
            let nextSong = setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }
    }
    
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    return(
        <div className = "player">
             <div className = "time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    type = "range" 
                    min = {0}
                    max = {songInfo.duration || 0}
                    value = {songInfo.currentTime} 
                    onChange = {dragHandler}
                />
                <p>{getTime(songInfo.duration)}</p>
             </div>
            <div className = "play-control">
                <FontAwesomeIcon 
                    className = "skip-back" 
                    onClick = {() => {skipTrackHandler('skip-back')}}
                    size = "2x"  
                    icon = {faAngleLeft} 
                />
                <FontAwesomeIcon 
                    onClick = {playSongHandler} 
                    className = "play" 
                    size = "2x"  
                    icon = {isPlaying ? faPause : faPlay} 
                />
                <FontAwesomeIcon 
                    className = "skip-forward"
                    onClick = {() => {skipTrackHandler('skip-forward')}} 
                    size = "2x"  
                    icon = {faAngleRight} 
                />
            </div>
            
        </div>
    )
}

export default Player;