import React from 'react';
import { Link } from 'react-router-dom';
import '../AdminSide/Adminbar.css';


function Adminbar() {
  return (
    
       <div className="adminbar">
      <h2 className="adminbar-heading">Admin</h2>
      <ul className="adminbar-list">
        <li className="adminbar-item">
    <Link to="/admincollection">Products</Link>
        </li>
        <li className="adminbar-item">
          <Link to="/addproduct">Add Product</Link>
        </li>
        <li className="adminbar-item">
          <Link to="/adminuser">Users</Link>
        </li>
        <li className="adminbar-item">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>

    
  )
}

export default Adminbar