import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import PackageCard from '../PackageCard/PackageCard';
import './Packages.css';

const Packages = () => {
    const [packages, setPackges] = useState([]);
    const {isLoading} = useAuth();
    
    useEffect(()=> {
        fetch('https://shrouded-reef-39821.herokuapp.com/packages')
        .then(res=> res.json())
        .then(data => setPackges(data))
    },[])

    if(isLoading){
        return <div className="d-flex justify-content-center mt-5"><Spinner animation="grow" variant="danger" /></div>
    }

    return (
    <div className="b-color py-5">
            <div className="container my-5 ">
           <div className=" my-5">
           <h4 className="p-color text-center fw-bold ">Choose Your Package</h4>
            <h1 className="text-center fw-bold">Select Your Best Package For Your Travel</h1>
           </div>
           <div>
           <div className="row row-cols-1 row-cols-md-3 g-4">
               {
                   packages.map(pk => <PackageCard 
                    key={pk.kye}
                     pk={pk}
                     ></PackageCard> )
               }
           </div>
           </div>
        </div>
    </div>
    );
};

export default Packages;