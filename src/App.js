import 'boxicons';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import Login from './Components/Shared/Login/Login';
import SignUp from './Components/Shared/Login/SignUp';
import Products from './Components/Products/Products';
import ProductDetails from './Components/Products/ProductDetails';
import AddProduct from './Components/Products/AddProduct';
import ManageProduct from './Components/Products/ManageProduct';
import NotFound from './Components/Shared/NotFound';
import PrivateAuth from './Components/Shared/Login/PrivateAuth';


function App() {

  return (
    <div className="">

      <Navbar />
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/login" element={<Login />} />
        < Route path="/signup" element={<SignUp />} />

        {/* company inventory   */}
        < Route path="/addProduct" element={<AddProduct />} />
        < Route path="/manageProduct" element={<ManageProduct />} />
        < Route path="/shop" element={<Products />} />
        < Route path='/productDetails/:productID' element={
          <PrivateAuth>
            <ProductDetails />
          </PrivateAuth>
        } />

        < Route path='*' element={<NotFound />} />


      </Routes>
      <Footer />
      <ToastContainer />

    </div >
  );
}

export default App;
