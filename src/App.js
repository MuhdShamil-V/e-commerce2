import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { myContext } from "./Components/Context";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Collection from "./Components/Collection";
import Men from "./Components/Men";
import Women from "./Components/Women";
import ViewPrdct from "./Components/ViewPrdct";
import { Product } from "./Components/ProductData";
import MyCart from "./Components/MyCart";
import Adminbar from "./Components/AdminSide/Adminbar";
import UserSearch from "./Components/UserSearch";
import AdminUser from "./Components/AdminSide/AdminUser";
import AdminCollection from "./Components/AdminSide/AdminCollection";
import AdminEdit from "./Components/AdminSide/AdminEdit";
import AdminLogin from "./Components/AdminSide/AdminLogin";
import AddProduct from "./Components/AdminSide/AddProduct";



function App() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const [product, setProduct] = useState(Product);

  const [user, setUser] = useState([]);

  const [login, setLogin] = useState(false);

  const [cart, setCart] = useState([]);

  const [admin, setAdmin] = useState();

  const [search, setSearch] = useState()


  return (
    <div>
      
     
      <myContext.Provider value={{
         user,
         setUser,

         login,
         setLogin,

         product,
         setProduct,

         cart,
         setCart,

         admin,
         setAdmin,
        
         }}>
          
        
       
        <BrowserRouter>
          <Routes>
          
            <Route path="/signup" element = {<Signup />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/collection" element= {<Collection />} />
            <Route path="/men" element= {<Men />} />
            <Route path="/women" element= {<Women />} />
            <Route path="/viewproduct/:Id" element= {<ViewPrdct />} />
            <Route path="/mycart" element= {<MyCart />} />
            <Route path="/usersearch" element= {<UserSearch />} />
            <Route path="/adminbar" element= {<Adminbar />} />
            <Route path="/adminuser" element={<AdminUser />} />
            <Route path="/admincollection" element={<AdminCollection />} />
            <Route path="/adminedit/:Id" element={<AdminEdit />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/addproduct" element={<AddProduct />} />
              
            

          
          </Routes>
        </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}

export default App;