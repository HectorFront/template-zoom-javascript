import './App.css';
import Image from './image.jpg';
import {Zoom} from "./zoom";

function App() {
  return (
    <div className="App">
      <Zoom
          image={Image}
      />
    </div>
  );
}

export default App;
