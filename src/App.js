import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'boxicons';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import Login from './Components/Shared/Login/Login';
import SignUp from './Components/Shared/Login/SignUp';

function App() {

  return (
    <div className="">
      <Navbar />
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/login" element={<Login />} />
        < Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
