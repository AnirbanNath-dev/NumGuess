
import Play from './components/Play'
import Rules from './components/Rules';
import LandingPage from './components/LandingPage';


import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' Component={LandingPage}/>
        <Route path='/play' Component={Play}/>
        <Route path='/rule' Component={Rules}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
