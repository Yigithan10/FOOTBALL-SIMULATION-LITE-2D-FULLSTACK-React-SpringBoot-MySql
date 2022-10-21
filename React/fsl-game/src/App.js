import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import LoginPanel from './components/LoginPanel';
import Register from './components/Register';
import Language from './components/Language';
import ChangeUsername from './components/ChangeUsername'
import ChangePassword from './components/ChangePassword'
import DeleteAccount from './components/DeleteAccount'
import Teamselect from './components/Teamselect';
import Leagueselect from './components/Leagueselect';
import Mainmenu from './components/Mainmenu';
import Settings from './components/Settings';
import Quitmenu from './components/Quitmenu';
import Selectside from './components/Selectside';
import Matchquitmenu from './components/Matchquitmenu';
import Playorgameplan from './components/Playorgameplan';
import Gameplanmenu from './components/Gameplanmenu';
import Strategy from './components/Strategy';
import Playmatchmenuplayers from './components/Playmatchmenuplayers';
import Eventsmenu from './components/Eventsmenu';
import Statisticsmenu from './components/Statisticsmenu';
import Playersmenu from './components/Playersmenu';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPanel />} />
          <Route path='/register' element={<Register />} />
          <Route path='/language' element={<Language />} />
          <Route path='/mainmenu' element={<Mainmenu />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/changeusername' element={<ChangeUsername />} />
          <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/deleteaccount' element={<DeleteAccount />} />
          <Route path='/exitmenu' element={<Quitmenu />} />
          <Route path='/selectside' element={<Selectside />} />
          <Route path='/teamselect' element={<Teamselect />} />
          <Route path='/leagueselect' element={<Leagueselect />} />
          <Route path='/playorgameplan' element={<Playorgameplan />} />
          <Route path='/gameplanmenu' element={<Gameplanmenu />} />
          <Route path='/strategy' element={<Strategy />} />
          <Route path='/playmatchmenuplayers' element={<Playmatchmenuplayers />} />
          <Route path='/playersmenu' element={<Playersmenu />} />
          <Route path='/eventsmenu' element={<Eventsmenu />} />
          <Route path='/statisticsmenu' element={<Statisticsmenu />} />
          <Route path='/matchquitmenu' element={<Matchquitmenu />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
