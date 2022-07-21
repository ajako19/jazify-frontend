import React from "react";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { Track } from "../models/Track";
import SearchResult from "./SearchResult";
import "./Library.css"
import { User } from "../models/User";
import axios from "axios";

const spotifyApi = new SpotifyWebApi({
  clientId: "38dab61be602496183a8e42aef0aa8d7",
});

interface Props {
    token: string;
}

export default function Dashboard({token}:Props) {
  const accessToken = token;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Track[] | undefined>([]);
  const [playingTrack, setPlayingTrack] = useState<Track>()
  const [userData, setUserData] = useState<User>()
  console.log(searchResults);

  function chooseTrack(track:Track) {
    setPlayingTrack(track)
    setSearch("")
  }

  useEffect(() => {
    if (!accessToken) return;
    // if the token exists, end on the return right there,
    // if else not, run line the next line
    spotifyApi.setAccessToken(accessToken);
    // sets the spotify api access token
  }, [accessToken]);

  useEffect(() => {
    // if theres no search, set the results to nothing
    if (!search) return setSearchResults([]);
    if (!accessToken) return;
    // searches tracks based on criteria
    spotifyApi.searchTracks(search).then((res) => {
      console.log(res)

      // checks if tracks exist if not, empty array
      setSearchResults(
        res.body.tracks?.items.map((track) => {
          const smallestAlbumImg = track.album.images.reduce(
            (smallest, image) => {
              if (image.height! < smallest.height!) return image;
              // if image is less than the smallest image, return the new smallest img
              return smallest;
            },
            track.album.images[0]
          );

          // this loop compares the image height to the smallest height,
          // assuming track.album.images is the default value
          // if i really care, search up reduce

          return {
            artist: track.artists[0].name,
            // get the first artist from the track.artist
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImg.url,
            // console logging these things set
            // as search results
          };
        })
      );
      // map thru each of the tracks
      // gives back all of the tracks we want
      // 38:58 in the tutorial for a good example on the
      // api interfaces
      
    });

    // spotifyApi.getUser().then((res) => {

    // how do i go about getting a dynamic username without a user id?


    // })
    // whole cancelling doesn't let queries overlap

    // axios.get("api.spotify.com/v1/me", {
      
    // })

  }, [search, accessToken]);

  // whenever the search of accessToken changes, run this


  return (
    <div style={{ height: "100vh" }}>
      <input
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>

      <div className="searchResults">
        {searchResults?.map((track) => (
          <SearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
        ))}
      </div>
      {/* <MusicPlayer accessToken={accessToken} trackUri={playingTrack?.uri} /> */}
    </div>
  );
}
// ask max for help getting the image url thing into the interfaces
// and annotate all of this :)