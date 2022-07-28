import "./Player.css"
import { useEffect, useState} from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { useNavigate } from "react-router-dom"
import {AiOutlineHome, AiOutlineHeart} from 'react-icons/ai'

export default function Player({token, trackUri}: any) {
    const [play, setPlay] = useState(false)
    const navigate = useNavigate();
    
    useEffect(() => setPlay(true), [trackUri])

    if (!token) return null
  return (
    <div>

        {/* <SpotifyPlayer
        token={token}
        showSaveIcon
        callback={state => {
            if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        /> */}

<div className="nav_container">

<div className="Nav">
<div className="NavButtons" onClick={() => {navigate("/")}}><AiOutlineHome/></div>
<div className="NavButtons" onClick={() => {navigate("/likedsongs")}}><AiOutlineHeart/></div>
    {/* <a className="sideNavButtons" href="#">Library</a>
    <a className="sideNavButtons" href="#">Liked Songs</a> */}
</div>

</div>
    </div>

        
  )
}

