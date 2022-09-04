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
import AddProduct from './Components/Dashboard/AddProduct';
import ManageProduct from './Components/Dashboard/ManageProduct';
import NotFound from './Components/Shared/NotFound';
import PrivateAuth from './Components/Shared/Login/PrivateAuth';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrders from './Components/Dashboard/MyOrders';
import MyProfile from './Components/Dashboard/MyProfile';
import AddReviews from './Components/Dashboard/AddReview';
import ManageAllOrders from './Components/Dashboard/ManageAllOrders';


function App() {

  return (
    <div className="">

      <Navbar />
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/login" element={<Login />} />
        < Route path="/signup" element={<SignUp />} />

        {/* company inventory   */}
        < Route path="/shop" element={<Products />} />
        < Route path='/productDetails/:productID' element={
          <PrivateAuth>
            <ProductDetails />
          </PrivateAuth>
        } />

        {/* dashboard  && nested route*/}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<MyOrders />}></Route>
          <Route path="manageProducts" element={<ManageProduct />}></Route>
          <Route path="addProduct" element={<AddProduct />}></Route>
          <Route path="myProfile" element={<MyProfile />}></Route>
          <Route path="addReview" element={<AddReviews />}></Route>
          <Route path="manageAllOrders" element={<ManageAllOrders />}></Route>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
      <ToastContainer />

    </div >
  );
}

export default App;
