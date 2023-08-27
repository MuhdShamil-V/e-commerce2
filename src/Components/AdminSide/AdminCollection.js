import React, { useContext } from 'react';
import { myContext } from '../Context';
import '../AdminSide/Collection.css';
import { useNavigate } from 'react-router-dom';

function AdminCollection() {

  const navigate = useNavigate();
  const { product, setProduct } = useContext(myContext);
  console.log(product);

  const RemovePrdct = (productId)=> {
      const updatedProducts = product.filter(item => item.Id !== productId)
      setProduct(updatedProducts);
  }


  return (
    <div className="admin-collection-container">
      <h1 className="admin-collection-title">Products</h1>
      <table className="admin-collection-table">
        <thead>
          <tr>
            <th className="admin-collection-header">Id</th>
            <th className="admin-collection-header">Image</th>
            <th className="admin-collection-header">Name</th>
            <th className="admin-collection-header">Price</th>
            <th className="admin-collection-header">Gender</th>
            <th className="admin-collection-header">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.Id} className="admin-collection-row">
              <td>{item.Id}</td>
              <td>
                <img src={item.Image} alt={item.ProductName} className="admin-collection-image" />
              </td>
              <td>{item.ProductName}</td>
              <td>{item.Price}</td>
              <td>{item.Gender}</td>
              <td>
              <button className="admin-collection-button remove-button"
              onClick={()=> RemovePrdct(item.Id)}>
                Remove
              </button>
              <button className="admin-collection-button update-button" onClick={()=> navigate(`/adminedit/${item.Id}`)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminCollection;
