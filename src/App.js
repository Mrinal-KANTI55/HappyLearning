import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Courses from './Component/Courses/Courses';
import About from './Component/About/About';
import Help from './Component/Help/Help';
import NotFound from './Component/NotFound/NotFound';
import FooterBar from './Component/FooterBar/FooterBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/help'>
            <Help></Help>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      <FooterBar></FooterBar>
      </BrowserRouter>      
    </div>
  ); 
}

export default App;
