import React from "react";

function Spotify() {
  const CLIENT_ID = process.env.MUSIC_ID;
  const REDIRECT_URL = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  return (
    <div className="SpotifyPage">
      <header className="spotify">
        <h1>Spotify Fahmi Ali</h1>
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      </header>
    </div>
  );
}

export default Spotify;
