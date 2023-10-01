import FetchData from "./components/FetchingData";
import Header from "./components/Header";
import Meme from "./components/Meme";


function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
      <FetchData/>
    </div>
  );
}

export default App;
