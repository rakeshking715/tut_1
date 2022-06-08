import Time from './Components/Time';
import { Route, Switch, Redirect } from 'react-router-dom';
import Hooks from './Components/Hooks';
import Netflix from './Components/Netflix';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import Error from './Components/Error';
import Form from './Components/Form';
import List from './Components/List';
import Nav from  './Components/Nav';
// import "../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css";

function App() {
  return (
    <> 
    <Nav/>
    <h1 className='text-center text-capitalize'>This is my first React app.</h1>
    <Navbar/>

    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/netflix" component={Netflix}/>
    <Route exact path="/netflix/time" component={Time}/>
    <Route exact path="/netflix/time/hooks" component={Hooks}/>
    <Route exact path="/netflix/time/hooks/form" component={Form}/>
    <Route exact path="/netflix/time/hooks/form/list" component={List}/>
    {/* <Route component={Error}/>  // this is used when we have toshow error page without redirect */}
    <Redirect to='/'/>
    </Switch>

    </>
  );
}



export default App;
