import './App.css';
import axios from 'axios';
import Menu from './components/Menu/Menu';

axios.defaults.baseURL = 'http://localhost:3030';
// axios.defaults.baseURL = 'http://54.74.52.150:3030';

function App() {
  return (
    <div id='wrapper'>
      <Menu />
    </div>
  );
}

export default App;
