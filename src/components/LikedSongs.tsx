import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Track } from '../models/Track'
import Player from './Player';
import "./LikedSongs.css"
import SearchResult, { fetchAllLikedSongs } from './SearchResult'
const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:5001/finalprojectjakobzach/us-central1/api";

export function removeLikedSong(id:any) {
  return axios.delete(`${baseUrl}/likedSongsDelete/${id}`)
  .then(res => res.data);
}

export default function LikedSongs() {
  const [data, setData] = useState<Track[]>([])
  

  useEffect(() => {
    fetchAllLikedSongs().then(res => {
      setData(res);
      
    })
  }, [data])

  return (
    <div className='LikedSongs'>
      <div className="searchResults">
        {data.map((track:Track) => (
    <div className='pageContentItem'>
    <img className='albumImg' src={track.albumUrl}/>
    <div className='songinfo'>
    <div className='title'>{track.title}</div>
    <div className='artist'>{track.artist}</div>
  <div>
    <i onClick={() => {removeLikedSong(track._id)}} className="fa-solid fa-heart heart"></i>
  </div>
    </div>
  </div>))}
      </div>
      <Player/>
    </div>
  )
}
