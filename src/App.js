import logo from './logo.svg';
import './App.css';

import Board from './pages/Game';
import Login from './pages/Login'
import HobbyList from './pages/HobbyList';
import Counter from  './pages/Counter';

function App() {
  return (
    <div className="App">
      {/* <Game /> */}
      {/* <Login /> */}
      {/* <HobbyList /> */}
      {<Counter />}
    </div>
  );
}

export default App;