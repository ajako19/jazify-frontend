import "./Player.css"
import { useEffect, useState} from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { useNavigate } from "react-router-dom"
import AiOutlineHome from 'react-icons/ai'

export default function Player({token, trackUri}: any) {
    const [play, setPlay] = useState(false)
    const navigate = useNavigate();

useEffect(() => setPlay(true), [trackUri])

    if (!token) return null
  return (
    <div>
        <SpotifyPlayer
        token={token}
        showSaveIcon
        callback={state => {
            if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        />

<div className="sn_container">

<div className="Sidenav">
<div className="NavButtons" onClick={() => {navigate("/")}}><i className="fa-light fa-house"></i></div>
<div></div>
<div className="NavButtons" onClick={() => {navigate("/likedsongs")}}>Liked Songs</div>
    {/* <a className="sideNavButtons" href="#">Library</a>
    <a className="sideNavButtons" href="#">Liked Songs</a> */}
</div>

</div>
    </div>

        
  )
}

