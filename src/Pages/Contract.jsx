import React, { useState } from 'react';
import './Css/contact.css';
import axios from 'axios';

const Contact = () => {
    const [name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/people_msg', { name, email, number, message })
            .then(result => {
                console.log(result);
                // Reset the form fields
                setFullName('');
                setEmail('');
                setNumber('');
                setMessage('');
                // Set the success message
                setSuccessMessage('Your message has been sent successfully!');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="contact-card">
            <div className="contact-info">
                <h2>Contact Me</h2>
                {successMessage && <p className="success-message">{successMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            Full Name <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email <span className="required">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">
                            Phone No <span className="required">*</span>
                        </label>
                        <input
                            type="tel"
                            id="number"
                            name="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">
                            Message <span className="required">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            required
                            style={{ fontSize: '16px' }} // Increased font size for the message box
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="vertical-line"></div>
            <div className="contact-image">
                <img
                    src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1808.jpg"
                    alt="Contact"
                />
            </div>
        </div>
    );
};

export default Contact;
