import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import NomineePage from './components/FinalNomineePage/FinalNomineePage';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/nominees" component={NomineePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
