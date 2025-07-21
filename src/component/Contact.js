const Contact = () => (
  <div className="page">
    <h2>Contact</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Contact;
