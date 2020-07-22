import React, { useState } from "react";
import theme from "../theme";
import { withRouter } from "react-router-dom";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitted) return;
    setSubmitted(true);
    const payload = {
      name,
      email,
      details,
    };
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.status === 200) {
      props.history.push("/success");
    } else {
      alert(
        "Oops, your message failed to send! Please try again, or email hi@ktype.xyz directly."
      );
    }
  }
  return (
    // Page fade in
    <div
      className="anim-fade-in"
      style={{
        width: "100%",
      }}
    >
      <div
        className="background-color"
        style={{ backgroundColor: theme.colors.light }}
      >
        <div className="centering" style={{ maxWidth: 1200 }}>
          <h1 style={{ textAlign: "left" }}>Let's make beautiful work.</h1>
          <p style={{ color: theme.colors.dark, fontWeight: 500 }}>
            Have a new project or just want to say hello? Please email{" "}
            <a href="mailto:hi@ktype.xyz" className="underline">
              hi@ktype.xyz
            </a>{" "}
            or use the form below.
            <br></br>
            I'm quick to respond, so we'll be in touch shortly.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="contact-subcontainer">
              <div>
                <br />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeholder="Your Full Name *"
                />
                <br />
              </div>
              <div>
                <br />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  autoComplete="off"
                  placeholder="Your Email Address *"
                />
              </div>
            </div>
            <div className="contact-subcontainer">
              <div>
                <br />
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  name="details"
                  placeholder="Your Message *"
                  cols={43}
                  rows={7}
                />
              </div>
            </div>
            <br />
            <div style={{ marginBottom: 40 }}>
              <button
                className="k-button"
                onClick={(e) => handleSubmit(e)}
                disabled={submitted || !(name && email && details)}
              >
                {submitted ? "PROCESSING" : "SEND"}
              </button>
              {(name || email || details) && !(name && email && details) && (
                <div className="error-message">
                  * Please enter all required fields before submitting this
                  form.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Contact);
