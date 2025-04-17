import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5444/register', { name, email, password })
      .then((result) => {
        console.log(result);
        navigate('/login'); // Navigate only after success
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <div className="Blink-img">
        
      </div>
      <div className="form-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label><strong>Name</strong></label>
            <input type="text" placeholder="Enter Name" 
              onChange={(e) => setName(e.target.value)} required />
          </div>
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
          <button type="submit" className="btn-success">Register</button>
        </form>
        <p>Already have an account?</p>
        <Link to="/login" className="btn-light">Login</Link>
      </div>
    </div>
  );
}

export default Signup;