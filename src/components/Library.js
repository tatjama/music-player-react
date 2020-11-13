import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong}) => {
    console.log({songs})
    return(
        <div className = "library">
        <h1>Library</h1>
        <div className = "library-songs">
            {songs.map(song =>  
            <LibrarySong 
                songs = {songs} 
                setCurrentSong = {setCurrentSong} 
                song = {song}
                id = {song.id}
                key = {song.id}
            />)}

        </div>
    </div>
    )
    
}

export default Library