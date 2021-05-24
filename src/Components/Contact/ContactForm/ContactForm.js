import React from 'react';
import './ContactForm.css';


const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('sr_sohan@22', 'template_ufacunl', e.target, 'user_9ufoY6H7TMASIZ2DFsq2G')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
        //   alert('Done! send information')
          e.target.reset();
    };
    return (
        <div className="form-area">
             <form onSubmit={sendEmail}  >
                        <h4>Send  a message</h4>
                    <div className="form-group"> 
                        <input name="name"  placeholder="Your Name" className="form-control" />
                       
                    </div>
                    <div className="form-group"> 
                        <input type="email" name="email"  placeholder="Your Email" className="form-control" />
                    </div>
                    <div className="form-group"> 
                        <input name="subject"  placeholder="Your Subject" className="form-control" />
                    </div>
                    <div className="form-group"> 
                        <input type="number" name="number"  placeholder="Your Number" className="form-control" />
                    </div>
                    <div className="form-group"> 
                        <textarea name="message" placeholder="Your Message" className="form-control"   cols="30" rows="5"></textarea>
                    </div>
                    
                    <div className="form-group"> 
                        <input type="submit" className="btn  btn-block " value="Send"/>
                    </div>
                </form>
        </div>
    );
};

export default ContactForm;