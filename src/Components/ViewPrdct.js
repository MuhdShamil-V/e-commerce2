import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { myContext } from './Context';
import { Product } from './ProductData';


function ViewPrdct() {

  const navigate = useNavigate();

  const { cart, setCart, login } = useContext(myContext);

  const { Id } = useParams(); 

  const filteredProduct = Product.filter((item) => item.Id === parseInt(Id));

  const myCart = () => {

    if(login){

      const[newData] = filteredProduct;
      const duplicate = cart.filter((item)=>item.Id === Id);

      if(duplicate.length>0){
        return alert ("Product already exists");
      
      }else{
        setCart (prevState => [...prevState, newData]);
        alert("Product added to Cart");
      }
    }else{
      alert('Please Login')
      navigate('/login')
    }


  }

  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
      <div className='pb-5'>
        {filteredProduct.map((e) => (
          <Card className='w-35 h-50 mt-5 d-inline-block shadow' key={e.Id}>
            <Card.Img variant="top" src={e.Image} /> 
            <Card.Body className='text-center'>
              <Card.Title>{e.ProductName}</Card.Title><br></br>
              <h4>₹ {e.Price}</h4>
              <Button onClick={myCart} className='cartbtn shadow' id='cartButton'>
                Add To Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ViewPrdct;
