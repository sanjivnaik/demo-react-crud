import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateComponent() {
 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
   
    const handleSubmit = () => {
      setLoading(true);
      setIsError(false);
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email
      }
      axios.post('http://localhost:8081/api/employees', data).then(res => {
        setData(res.data);
        setFirstName('');
        setLastName('');        
        setEmail('');
        setLoading(false);
      }).catch(err => {
        setLoading(false);
        setIsError(true);
      });
    }
   
    return (
      <div className="container p-3">
        <h5 className="d-inline-block mb-3">POST request using axios with React Hooks - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h5>
        <div style={{ maxWidth: 350 }}>
          <div classNames="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter first name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)} />
          </div>
          <div classNames="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)} />
          </div>
          <div classNames="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)} />
          </div>
          {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
            disabled={loading}
          >{loading ? 'Loading...' : 'Submit'}</button>
          {data && <div className="mt-3">
            <strong>Output:</strong><br />
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
          }
        </div>
      </div>
    );
  }
   
  export default CreateComponent;