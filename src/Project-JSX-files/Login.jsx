import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5444/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/');
        } else {
          alert(result.data);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container full-page-green">
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" 
              onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" 
              onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn-success">Login</button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/register" className="btn-light">Register</Link>
      </div>
    </div>
  );
}

export default Login;
