import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Project-JSX-files/Home';
import Ads from './Project-JSX-files/Ads';
import AdsName from './Project-JSX-files/AdsName';
import ColdDrink from './Project-JSX-files/ColdDrink';
import DairyProduct from './Project-JSX-files/DairyProduct';
import Gummies from './Project-JSX-files/Gummies';
import Hookha from './Project-JSX-files/Hookha';
import MouthFreshner from './Project-JSX-files/MouthFreshner';
import Rolling from './Project-JSX-files/Rolling';
import Snack from './Project-JSX-files/Snack';
import VariousSmallCatagory from './Project-JSX-files/VariousSmallCatagory';
import VariousSmallCatagory1 from './Project-JSX-files/VariousSmallCatagory1';
import Menu from './Project-JSX-files/Menu';
import Signup from './Project-JSX-files/Signup';
import Login from './Project-JSX-files/Login';
import ColdDrinkByName from './Project-JSX-files/ColdDrinkByName';
import DairyProductByName from './Project-JSX-files/DairyProductByName';
import GummiesByName from './Project-JSX-files/GummiesByName';
import HookhaByName from './Project-JSX-files/HookhaByName';
import MouthFreshnerByName from './Project-JSX-files/MouthFreshnerByName';
import RollingByName from './Project-JSX-files/RollingByName';
import SnackByName from './Project-JSX-files/SnackByName';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SelectAds/:city" element={<Ads/>} />
        <Route path="/SelectAds/" element={<AdsName/>} />
        <Route path="/ColdDrink/" element={<ColdDrink/>} />
        <Route path="/DairyProduct/" element={<DairyProduct/>} />
        <Route path="/Gummies/" element={<Gummies/>} />
        <Route path="/Hookha/" element={<Hookha/>} />
        <Route path="/MouthFreshner/" element={<MouthFreshner/>} />
        <Route path="/Rolling/" element={<Rolling/>} />
        <Route path="/Snack/" element={<Snack/>} />
        <Route path="/VariousSmallCatagory/" element={<VariousSmallCatagory/>} />
        <Route path="/VariousSmallCatagory1/" element={<VariousSmallCatagory1/>} />
        <Route path="/Menu/" element={<Menu/>} />
        <Route path="/register" element={<Signup/> } />
        <Route path="/login" element={<Login/>} />
        
        <Route path="/ColdDrinkName/:name" element={<ColdDrinkByName />} />
        <Route path="/DairyProductName/:name" element={<DairyProductByName/> } />
        <Route path="/GummiesName/:name" element={<GummiesByName/>} />
        <Route path="/HookhaName/:name" element={<HookhaByName/>} />
        <Route path="/MouthFreshnerName/:name" element={<MouthFreshnerByName/>} />
        <Route path="/RollingName/:name" element={<RollingByName/>} />
        <Route path="/SnackName/:name" element={<SnackByName/>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
