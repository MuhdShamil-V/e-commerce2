import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsCart4 } from 'react-icons/bs';
import { myContext } from './Context';


function MyCart() {
  const { cart, setCart } = useContext(myContext);

  const remove = (removeId) => {
    const balanceData = cart.filter((item) => item.Id !== removeId);
    setCart(balanceData);
  };

  const decreaseQty = (Id) => {
    const newQty = cart.map((item) =>
      item.Id === Id && item.Qty > 1 ? { ...item, Qty: item.Qty - 1 } : item
    );
    setCart(newQty);
  };

  const increaseQty = (Id) => {
    const newQty = cart.map((item) =>
      item.Id === Id ? { ...item, Qty: item.Qty + 1 } : item
    );
    setCart(newQty);
  };

  const calculateItemTotal = (item) => {
    return item.Price * item.Qty;
  };

  const calculateCartTotal = () => {
    return cart.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <h2 style={{ fontStyle: 'italic' }}>
        <BsCart4 /> MY CART
      </h2>
      <br />

      <div className="d-flex-column container">
        <div className="items">
          {cart.length > 0 ? (
            cart.map((item) => (
              <Card
                className="shadow p-3 mb-5 bg-body-tertiary rounded"
                style={{ width: '30rem' }}
                key={item.Id}
              >
                <Card.Img variant="top" src={item.Image} />
                <Card.Body style={{ textAlign: 'center' }}>
                  <Card.Title>{item.ProductName}</Card.Title>
                  <h6>Price: ₹ {item.Price}</h6>
                  <div>
                    <p>
                      Qty:
                      <Button
                        onClick={() => decreaseQty(item.Id)}
                        className="m-1"
                        variant="outline-primary"
                      >
                        -
                      </Button>
                      {item.Qty}
                      <Button
                        onClick={() => increaseQty(item.Id)}
                        className="m-1"
                        variant="outline-primary"
                      >
                        +
                      </Button>
                    </p>
                  </div>
                  <p>Total: ₹ {calculateItemTotal(item)}</p>

                  <Button variant="outline-primary">Buy Product</Button>

                  <Button
                    onClick={() => remove(item.Id)} // Pass the item.Id directly
                    className="ms-3"
                    variant="outline-danger"
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <div className="empty_img text-center">
              <img
                src="https://schoolville.com/assets/img/empty-cart-illustration.gif"
                alt=""
                style={{ width: '400px' }} 
              />
              <h3>Cart is empty</h3>
            </div>
          )}
          {cart.length > 0 && (
            <div className="d-flex justify-content-between align-items-center">
              <p className="fw-bold">Cart Total: ₹ {calculateCartTotal()}</p>
              <div>
                <Button variant="outline-primary">Buy All</Button>
                <Button onClick={clearCart} className="ms-3" variant="outline-danger">
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCart;
