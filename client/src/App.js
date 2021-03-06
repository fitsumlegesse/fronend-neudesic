import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import TopNav from './components/TopNav'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    
    <BrowserRouter>
      <TopNav/>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch> 
        <Route exact path="/" component={Home}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/register" component={Register}/>
      </Switch>
     
    </BrowserRouter>
  );
}

export default App;
