

const Contact = () => {
  return (
    <>
      
      <div className="contact-container">
        <div className="contact-content">
          <h1 id="main-contact">Let's Connect</h1>
          Email: <span id="email">adilkhan56988@gamil.com</span>

          <p>If you'd like to get in touch, feel free to send me a message!</p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
           
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Contact;
