import React from 'react'
import { useContext } from 'react'
import { myContext } from './Context'
import { Card } from 'react-bootstrap';

function UserSearch() {

    const { product , search } = useContext(myContext);
    
  return (
    <div>


      <h1 style={{textAlign: 'center'}} className='bg-info text-white'>COLLECTION</h1><br/>
      <h2 className='d-flex container'>Product</h2><br/>
  
      <div className='d-flex-column container'>
        <div className='row gap-5'>

            {product.filter((val) => {

                if(search===' '){
                    return val;
                }
                else if(val.Gender.toLowerCase().includes(search.toLowerCase())){
                    return val;
                  }else{
                    return false;
                  }
      
            })
             .map((item) => {
                <Card
                className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" 
                style={{ width: '21.5rem' }}
              >
                <Card.Img variant='top' src={item.Image}/>
                <Card.Body style={{textAlign: 'center'}}>
                  <Card.Title>{item.ProductName}</Card.Title>
                  <Card.Text>{item.Gender}</Card.Text> 
                  <h6>Price: ₹ {item.Price}</h6>
                </Card.Body>
                </Card>
             })}


    </div>
    </div>
    </div>
    )
}

export default UserSearch