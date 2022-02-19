import React, { useState, useRef } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    const form = useRef();
    function sendEmail(e){
        e.preventDefault();
    }
    function handleChange(e) {

    }

    return (
        <section id="contact">
          <div className="contacts">
            <h1 data-testid="h1tag" className="title">Get in Touch</h1>
            <p>I am looking for new opportunities to grow. My inbox is open.</p>
            <p>Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          
            <form className="form" ref={form} onSubmit={sendEmail}>
              <div>
                <input className="form-input" placeholder="Your Name" type="text" defaultValue={name} onBlur={handleChange} name="user_name"/>
              </div>
              <div>
                <input className="form-input" placeholder="Your Email" type="email" defaultValue={email} name="user_email" onBlur={handleChange} />
              </div>
              <div>
                <textarea className="form-input" placeholder="Your Message" name="message" defaultValue={message} rows="5" onBlur={handleChange} />
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <div>
                <button className="form-button" data-testid="button" type="submit">Submit</button>
              </div>
            </form>
          </div> 
        </section>
    );
}

export default Contact;