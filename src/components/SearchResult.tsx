import React from 'react'
import { Track } from '../models/Track'
import "./SearchResults.css"

interface Props {
  track: Track;
  chooseTrack: (track:Track) => void;
}

export default function SearchResult({track, chooseTrack}: Props)  { 
  
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
      <i className="fa-solid fa-heart"></i>
    </div>
    </div>
  )
}