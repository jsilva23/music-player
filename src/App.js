//Adding styles
import "./styles/app.scss";

//Adding components
import Player from "./components/Player";
import Song from "./components/Song";

//Import Util
import data from "./util";
import { useState } from "react";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[2]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
