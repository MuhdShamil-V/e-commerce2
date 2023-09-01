import React, { useContext } from 'react';
import { myContext } from '../Context';
import { Table } from 'react-bootstrap';

function AdminUser() {
  
  const {user} = useContext(myContext)
  console.log(user);

  return (
    <div style={{ backgroundColor: 'white', width: '70%', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>User</h1>
      <br />
      <br />

      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          
            {user.map((item) => (
              <tbody>
               <tr> 
                <td>{item.name}</td>
                <td>{item.email}</td>
               </tr>
             </tbody>
            ))}
             
        </Table>
      </div>
    </div>
  );
}

export default AdminUser;
