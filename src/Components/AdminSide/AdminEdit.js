import React, { useContext } from 'react';
import { myContext } from '../Context';
import { useNavigate, useParams } from 'react-router-dom';
import '../AdminSide/AdminEdit.css';

function AdminEdit() {

  const navigate = useNavigate();

  const { product, setProduct } = useContext(myContext);
  const { Id } = useParams();

  const editProduct = product.find((item) => item.Id === parseInt(Id));

  const submit = (e) => {
    e.preventDefault();

    const newName = e.target.elements.ProductName.value;
    const newPrice = e.target.elements.Price.value;
    const newGender = e.target.elements.Gender.value;
    const newImage = e.target.elements.Image.value;

    const updateProduct = {
      ...editProduct,
      ProductName: newName,
      Price: newPrice,
      Gender: newGender,
      Image: newImage,
    };

    const updatedProducts = product.map((item) =>
      item.Id === parseInt(Id) ? updateProduct : item
    );

    setProduct(updatedProducts);
    navigate('/admincollection')
  };

  return (
    <>
    <h2 className="admin-edit-title">Edit Product</h2>
      <div className="admin-edit-container">
        <form className="admin-edit-form" onSubmit={submit}>
        <div>
          <label>Name: </label>
          <input
            type='text'
            name='ProductName'
            defaultValue={editProduct.ProductName}
          />
        </div>

        <div>
          <label>Price: </label>
          <input
            type='text'
            name='Price'
            defaultValue={editProduct.Price}
          />
        </div>

        <div>
          <label>Gender: </label>
          <input
            type='text'
            name='Gender'
            defaultValue={editProduct.Gender}
          />
        </div>

        <div>
          <label>Image: </label>
          <input
            type='text'
            name='Image'
            defaultValue={editProduct.Image}
          />
        </div>

        <button className="admin-edit-button save-button" type='submit'>Save</button>
          <button className="admin-edit-button cancel-button" onClick={() => navigate('/admincollection')}>Cancel</button>
        </form>
      </div>
      
    
    </>
  );
}

export default AdminEdit;
