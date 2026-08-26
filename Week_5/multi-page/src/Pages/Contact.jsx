function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <p>We would love to hear from you!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> booknook@gmail.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 12 Book Street, Hyderabad</p>
      </div>

      <form>
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact