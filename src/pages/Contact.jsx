import React from "react";

const Contact = () => {
  const handleSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your Email"
            name="email"
          />
          <textarea
            className="form-control"
            rows="10"
            required
            autoComplete="false"
            placeholder="Enter your message"
            name="message"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
