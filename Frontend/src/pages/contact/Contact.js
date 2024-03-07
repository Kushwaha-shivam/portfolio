import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // react toast for success 
  const success = () => toast.success("We have recieved your message. Soon We'll get in touch.", {
    duration: 5000,
    style: { fontFamily: 'sans-serif' }
  }
  );
  // react toast for error 
  const error = () => toast.error("Oops! An error occurred.", {
    duration: 5000,
    style: { fontFamily: 'sans-serif' }
  }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/contact', { name, email, message });
      success();
    } catch (err) {
      error();
      console.log(err);
    }

    setName('')
    setEmail('')
    setMessage('')
  }


  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <div className="contact-form-container">
        <h2>Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              placeholder='Enter your name here'
              id='name'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder='Enter your email here'
              id='email'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder='Type a message...'
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>

  )

}

export default Contact;
