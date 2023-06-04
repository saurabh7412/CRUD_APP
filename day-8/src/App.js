import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <h1>
        CRUD APP
      </h1>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
