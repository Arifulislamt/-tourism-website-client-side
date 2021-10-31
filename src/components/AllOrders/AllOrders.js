import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllOrders = () => {
    const [order, setOrder] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(()=> {
        fetch("http://localhost:5000/allOrders")
        .then(res => res.json())
        .then(data => setOrder(data))
    },[control]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrders/${id}`, {
            method: "DELETE",
            headers: {"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                setControl(!control);
                alert('Are you sure?');
                
            }
            else{
                setControl(false);
            }
        });
        console.log(id);
    }

    return (
        <div>
                    <div className="container">
            <h1 className="p-color text-center mt-5">All Orders</h1>
            <div>
      <h3>AllOrders: {order?.length}</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="p-color bg-dark">#</th>
            <th className="p-color bg-dark">Name</th>
            <th className="p-color bg-dark">Email</th>
            <th className="p-color bg-dark">BookingPlace</th>
            <th className="p-color bg-dark">Date</th>
            <th className="p-color bg-dark">Action</th>
          </tr>
        </thead>
        {order?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd?.name}</td>
              <td>{pd?.email}</td>
              <td>{pd?.books}</td>
              <td>{pd?.date}</td>
              <button onClick={()=> handleDelete(pd._id)}  className="btn bg-danger m-2 p-2">Delete</button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
   </div>
        </div>
    );
};

export default AllOrders;