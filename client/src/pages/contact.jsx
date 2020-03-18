import React, { useState } from "react";
import theme from "../theme";
import { withRouter } from "react-router-dom";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priceRange, setPriceRange] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const priceRanges = [
    "Under $1,000",
    "Under $5,000",
    "Under $10,000",
    "$10,000+",
    "I'm not sure."
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitted) return;
    setSubmitted(true);
    const payload = {
      name,
      email,
      company,
      url,
      details,
      deadline,
      priceRange: priceRanges[priceRange]
    };
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
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
    <div className="contact-container anim-fade-in">
      <p>
        If you have a question, inquiry, or just want to say hi, you can write
        me at <br></br>
        <a href="mailto:hi@ktype.xyz" className="underline">
          hi@ktype.xyz
        </a>{" "}
        or use the form below.
        <br></br>
        <br></br>I'm quick to respond, so we'll be in touch soon!
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "0 auto",
          marginTop: theme.sizes.spacingV1 + 13,
          marginBottom: theme.sizes.spacingV2 + 66
        }}
      >
        <div className="contact-subcontainer">
          <div>
            <label for="name"> Full Name: *</label>
            <br />
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              name="name"
              autoComplete="off"
            />
            <br />
          </div>
          <div>
            <label for="email">Email Address: *</label>
            <br />
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              name="email"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="contact-subcontainer">
          <div>
            <label for="company">Company Name:</label>
            <br />
            <input
              value={company}
              onChange={e => setCompany(e.target.value)}
              type="text"
              name="company"
              autoComplete="off"
            />
            <br />
          </div>
          <div>
            <label for="url">Website URL:</label>
            <br />
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              type="text"
              name="url"
              autoComplete="off"
            />
            <br />
          </div>
        </div>
        <div className="contact-subcontainer">
          <div>
            <label for="deadline">
              Are there any deadlines we should be aware of? *
            </label>
            <br />
            <input
              value={deadline}
              onChange={e => setDeadline(e.target.value)}
              type="text"
              name="deadline"
              autoComplete="off"
            />
          </div>
          <div>
            <label for="budget">
              Do you have a budget range in mind?&nbsp;*
            </label>
            <br />
            <select
              value={priceRange}
              onChange={e => setPriceRange(e.target.value)}
              name="budget"
            >
              <option value={0}>{priceRanges[0]}</option>
              <option value={1}>{priceRanges[1]}</option>
              <option selected value={2}>
                {priceRanges[2]}
              </option>
              <option value={3}>{priceRanges[3]}</option>
              <option value={4}>{priceRanges[4]}</option>
            </select>
          </div>
          <div>
            <label for="details">
              Who are you? What are your hopes and goals for this project? *
            </label>
            <br />
            <textarea
              value={details}
              onChange={e => setDetails(e.target.value)}
              name="details"
              cols={43}
              rows={7}
            />
          </div>
        </div>

        <br />
        <div className="k-mbv1">
          <button
            className="k-button"
            onClick={e => handleSubmit(e)}
            disabled={submitted || !(name && email && details && deadline)}
          >
            {submitted ? "Processing" : "Submit"}
          </button>
          {(name || email || details || deadline) &&
            !(name && email && details && deadline) && (
              <p style={{ fontSize: "16px", display: "inline" }}>
                <font color="#b53737">
                  * Please enter all required fields before submitting this
                  form.
                </font>
              </p>
            )}
        </div>
      </form>
    </div>
  );
}

export default withRouter(Contact);
