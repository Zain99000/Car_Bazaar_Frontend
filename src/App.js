import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CarInfo from './Components/CarInfo';
import Home from './Pages/Home';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/carinfo/:carid', element: <CarInfo /> },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
