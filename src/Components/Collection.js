import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { myContext } from './Context';
import NavBar from './NavigationBar';



function Collection() {

  const navigate = useNavigate();

  const {product} = useContext(myContext)

  return (

    <div>

      <div>
        <NavBar />
      </div>
    <div>
      <h2 style={{fontStyle: 'italic'}}>Collections</h2>
    <div className="d-flex align-items-center justify-content-center flex-wrap">

      {product.map((item) => (
        <div key={item.Id} className='d-inline-flex'>
          <Card className="shadow p-3 m-2 bg-body-tertiary rounded" style={{ width: '18rem', height: '28rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Card.Img style={{ height: '15rem' }} className='p-2' variant="top" src={item.Image} />
            <Card.Body>
              <Card.Title>{item.ProductName}</Card.Title><br />
              <h5>Price: ₹ {item.Price}</h5>
            </Card.Body>
            <div style={{ margin: '10px' }}>
              <Button variant="primary" onClick={() => navigate(`/viewproduct/${item.Id}`)}>View Product</Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}

export default Collection;

