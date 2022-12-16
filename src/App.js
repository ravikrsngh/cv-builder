import './App.css';
import {BrowserRouter} from "react-router-dom";

import Header from './components/header/header';
import RouteData from './routes/routes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <RouteData />
      </div>
    </BrowserRouter>
  );
}

export default App;
