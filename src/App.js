
import './App.css';
import Banner from './Components/Banner/Banner';
import Moviecard from './Components/Moviecards/Moviecard';
import Navbar from './Components/Navbar/Navbar';
import { originals, action, horror, romance } from './movieUrls'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Moviecard title="Netflix Originals" isSmall={false} url={originals} />
      <Moviecard title="Action" isSmall={true} url={action} />
      <Moviecard title="Horror" isSmall={true} url={horror} />
      <Moviecard title="Romance" isSmall={true} url={romance} />
    </div>
  );
}

export default App;
