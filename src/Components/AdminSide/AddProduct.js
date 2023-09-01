import React, { useContext, useState } from 'react';
import { myContext } from '../Context';
import '../AdminSide/AddProduct.css';
import { useNavigate } from 'react-router-dom';

function AddProduct() {

  const navigate = useNavigate();

  const { product, setProduct } = useContext(myContext);

  const [newProduct, setNewProduct] = useState({
    ProductName: '',
    Price: '',
    Gender: '',
    Image: '',
  });

  const [lastId, setLastId] = useState(0);

  product.forEach((item) => {
    if (item.Id > lastId) {
      setLastId(item.Id);
    }
  });

  const nextId = lastId + 1;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !newProduct.ProductName ||
      !newProduct.Price ||
      !newProduct.Gender ||
      !newProduct.Image
    ) {
      alert('Please fill in all the fields');
      return;
    }

    const newProductData = {
      Id: nextId,
      ProductName: newProduct.ProductName,
      Price: newProduct.Price,
      Gender: newProduct.Gender,
      Image: newProduct.Image,
    };

    setProduct([...product, newProductData]);

    setNewProduct({
      ProductName: '',
      Price: '',
      Gender: '',
      Image: '',
    });

    setLastId(nextId)
    alert('Product added successfully');
    
    navigate('/admincollection')
    
  };

  return (
    <div className='add-product-container'>
      <h2 className='add-product-title'>Add New Product</h2>

      <form className='add-product-form' onSubmit={handleSubmit}>
        <label className='input-label'>
          Name:
          <input
            className='input-field'
            type='text'
            name='ProductName'
            value={newProduct.ProductName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Price:
          <input
           className='input-field'
            type='text'
            name='Price'
            value={newProduct.Price}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Gender:
          <input
           className='input-field'
            type='text'
            name='Gender'
            value={newProduct.Gender}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Image:
          <input
           className='input-field'
            type='text'
            name='Image'
            value={newProduct.Image}
            onChange={handleChange}
            required
          />
        </label>

        <button className='add-button' type='submit'>Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
