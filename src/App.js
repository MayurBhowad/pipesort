import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.component';
import Navbar from './components/Navbar.component';
import AddDetails from './components/payment/AddDetails.component';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/payment" exact component={AddDetails} />
      </Router>
    </>
  );
}

export default App;
