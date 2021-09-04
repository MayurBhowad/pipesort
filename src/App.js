import logo from './logo.svg';
import './App.css';
import Home from './components/Home.component';
import Navbar from './components/Navbar.component';
import AddDetails from './components/payment/AddDetails.component';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <AddDetails /> */}
    </>
  );
}

export default App;
