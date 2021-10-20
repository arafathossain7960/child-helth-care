
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import Donation from './Pages/Donation/Donation';
import NotFound from './Pages/NotFound/NotFound';
import Camp from './Pages/Camp/Camp';
import AuthProvider from './context/AuthProvider';
import PrivetRoute from './Pages/Login/PrivetRoute/PrivetRoute';
import Thank from './Pages/Donation/Thank/Thank';
import SingleService from './Pages/SingleService/SingleService';
function App() {
  return (
    <AuthProvider>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <PrivetRoute exact path="/blogs">
          <Blogs></Blogs>
        </PrivetRoute>
        <PrivetRoute exact path="/donation">
          <Donation></Donation>
        </PrivetRoute>
        <PrivetRoute exact path="/camp">
          <Camp></Camp>
        </PrivetRoute>
        <PrivetRoute path="/service/:id">
        <SingleService></SingleService>
        </PrivetRoute>
        <Route path="/thank">
        <Thank></Thank>
          </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
  
    </Switch>
    <Footer></Footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
