import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { myContext } from "./Components/Context";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import NavBar from "./Components/NavigationBar";
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



function App() {
 

  const [product, setProduct] = useState(Product);

  const [user, setUser] = useState([]);

  const [login, setLogin] = useState(false);

  const [cart, setCart] = useState([]);

  const [search, setSearch] = useState();

  const [adminSearch, setAdminSearch] = useState();

  const [edit, seEdit] = useState()



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

         search,
         setSearch,

         adminSearch,
         setAdminSearch,

         edit,
         seEdit,

        
         }}>
          
          
        
       
       
        <BrowserRouter>
         <NavBar />
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
              
            

          
          </Routes>
        </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}

export default App;