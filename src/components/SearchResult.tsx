import  Axios  from 'axios';
import React from 'react'
import { Track } from '../models/Track'
import "./SearchResults.css"

interface Props {
  track: Track;
  chooseTrack: (track:Track) => void;
}


export default function SearchResult({track, chooseTrack}: Props)  { 
  
  function handleLikedSongs () {
    Axios.post("http://localhost:3001/likedSong", {
      userID: 1,
      
      newSong: {
        ...track,
        // goes over the object of track and pulls the keys into
        // new song
      }
    })
  }
  
  function handlePlay () {
    chooseTrack(track)
  }

  function handleFavorite () {
    return 
  }
  
  return (
    <div className='SearchResult'>
    <div className='pageContentItem'>
      <img className='albumImg' src={track.albumUrl}/>
      <div className='title'>{track.title}</div>
      <div>{track.artist}</div>
    </div>
    <div>
      <i onClick={handleLikedSongs} className="fa-solid fa-heart"></i>
    </div>
    </div>
  )
}