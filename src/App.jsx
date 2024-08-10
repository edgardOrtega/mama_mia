import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbars from './components/Navbars'
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

function App() {


  return (
    <>
      <Navbars/>
      {/* <Home/> */}
{/*       <RegisterPage/> */}
      <LoginPage/>
      <Footer/>
    </>
  )
}

export default App
