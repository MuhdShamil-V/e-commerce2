import React from 'react';
import { Button } from 'react-bootstrap';
import '../Components/home.css';
import Collection from './Collection';
import Footer from './Footer';
import NavBar from './NavigationBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
    <div>
      <NavBar />
    </div>
    <div>
      <img style={{width: '100%'}} src='https://dev-resources.mynpp.com/app/uploads/2019/08/20144659/skechers-sneakers-sale.png' alt='main banner'/><br/><br/>

      <Button className='mn-btn' variant='light' size='lg' onClick={()=> navigate('/men')}>SHOP MEN</Button>
      <Button className='wn-btn' variant='light' size='lg' onClick={()=> navigate('/women')}>SHOP WOMEN</Button>

     
      
    </div>
    <hr></hr>
    <br></br>
    <div>
      <Collection />
      <hr></hr>
      <Footer />
    </div>
    </>
  );
}

export default Home;