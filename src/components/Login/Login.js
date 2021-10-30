import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {singInUsingGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        singInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div className="container my-5">
            <h1 className="p-color text-center fw-bold my-5">Plz login hear</h1>
         <div className="row mx-5">
             <div className=" shadow-lg p-5 rounded">
             <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label >Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label >Password</label>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <button onClick={handleGoogleLogin} className="btn btn-success fw-bold"><i className="fab fa-google p-color me-2"></i> Google Login Only</button>
            </div>
             </div>
             {/* <div className="col-md-6"></div> */}
         </div>
        </div>
    );
};

export default Login;