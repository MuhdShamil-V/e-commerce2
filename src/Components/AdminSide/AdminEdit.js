import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { myContext } from '../Context';


function AdminEdit() {

    const {product, setProduct} = useContext(myContext);

    const {id} = useParams();

    const editProduct = product.find((item) => item.id === parseInt(id))

    const submit = (e)=> {
      e.preventDefault();
      const newTitle = e.target.title.value
    }
  return (
    <div>
         <h2>Edit Product</h2>
         {edit.map((item) => (
             <form>
             <div>
               <label>Id:</label>
               <input
                 type="text"
                 name="Id"
                 value={item.Id}
                 
               />
             </div>
             <div>
               <label>Name:</label>
               <input
                 type="text"
                 name="ProductName"
                 value={item.Name}
                 
               />
             </div>
             <div>
               <label>Price:</label>
               <input
                 type="text"
                 name="Price"
                 value={item.Price}
                 
               />
             </div>
             <div>
               <label>Gender:</label>
               <input
                 type="text"
                 name="Gender"
                 value={item.Gender}
                
               />
             </div>
            
             <div>
               <button type="button" onClick={editUpdate}>
                 Save
               </button>{''}
               <button type="button">
                 Cancel
               </button>
             </div>
           </form>
         ))}
     
    </div>
  )
}

export default AdminEdit