//Adding styles
import "./styles/app.scss";

//Adding components
import Player from "./components/Player";
import Song from "./components/Song";

//Import Util
import data from "./util";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
