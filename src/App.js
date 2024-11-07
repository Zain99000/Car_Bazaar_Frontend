import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { CarDisplays } from './Components/CarDisplaysAutomatic';

function App() {
  return (
    <div className="App">
      <Header />
      <CarDisplays />
    </div>
  );
}

export default App;
