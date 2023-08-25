import React from 'react';
import { Button } from 'react-bootstrap';
import '../Components/home.css';
import Collection from './Collection';
import Footer from './Footer';

const Home = () => {

  return (
    <>
    <div>
      <img style={{width: '100%'}} src='https://dev-resources.mynpp.com/app/uploads/2019/08/20144659/skechers-sneakers-sale.png'/><br/><br/>

      <Button className='mn-btn' variant='light' size='lg'>SHOP MEN</Button>
      <Button className='wn-btn' variant='light' size='lg'>SHOP WOMEN</Button>

     
      
    </div>
    <hr></hr>
    <br></br>
    <div>
      <Collection />
      <Footer />
    </div>
    </>
  );
}

export default Home;