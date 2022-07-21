import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Library';
import Library from './components/Library';
import Sidenav from './components/Sidenav';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink } from "react-router-dom"
import LikedSongs from './components/LikedSongs';

function App() {
  const CLIENT_ID = "38dab61be602496183a8e42aef0aa8d7"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists"
  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")!

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))!.split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
        // sets the token to local storage
        // assuming i'm just gonna have to move some of the
        // local storage stuff to mongo
    }

    setToken(token)

  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  const searchArtists = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
            // uses bearer and the token above
        },
        params: {
            q: searchKey,
            // state from above
            type: "artist"
            // params for spotify api for artists
        }
    })

    setArtists(data.artists.items)
  }
  
  return (
    <div className="App">
      {token ? <Router>
    <Routes>
    
    <Route path='/home' element={<Library token={token}/>}></Route>
    <Route path='/library' element={<LikedSongs/>}></Route>
    <Route path='/likedsongs' element={<LikedSongs/>}></Route>
  </Routes>
    <Sidenav/>
  </Router> : null}
    

      {!token ?
      <a className='logintospotify' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
      to Spotify</a>
      : <button className='logoutButton' onClick={logout}>Logout</button>}
      {token ? <form onSubmit={searchArtists}>

      </form> : <h1></h1>}
    </div>
  );
}

export default App;

