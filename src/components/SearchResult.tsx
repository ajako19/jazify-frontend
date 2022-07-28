import  Axios  from 'axios';
import React from 'react'
import { Track } from '../models/Track'
import "./SearchResults.css"
const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:5001/finalprojectjakobzach/us-central1/api";


interface Props {
  track: Track;
  chooseTrack: (track:Track) => void;
}

export function fetchAllLikedSongs(): Promise<Track[]> {
  return Axios.get<Track[]>(`${baseUrl}/likedSong`)
      .then(res => res.data);
}

function handleLikedSongs (track:Track) {
  Axios.post(`${baseUrl}/likedSongPost`, track).then((res) => res.data)
}

export default function SearchResult({track, chooseTrack}: Props)  { 
  
  return (
    <div className='SearchResult'>
    <div className='pageContentItem'>
      <img className='albumImg' src={track.albumUrl}/>
      <div className='songinfo'>
      <div className='title'>{track.title}</div>
      <div className='artist'>{track.artist}</div>
    <div>
      <i onClick={() => handleLikedSongs(track)} className="fa-solid fa-heart"></i>
    </div>
      </div>
    </div>
    </div>
  )
}