import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priceRange, setPriceRange] = useState(2);
  const priceRanges = [
    "< $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 +"
  ];

  async function handleSubmit(event) {
    const serverUrl = "http://localhost:4000/mail";
    const query = `?name=${name}&email=${email}&company=${company}&url=${url ||
      "no website provided"}&details=${details}&deadline=${deadline ||
      "idk, because they didn't provide a deadline"}&priceRange=${
      priceRanges[priceRange]
    }`;
    //TODO: replace with proper server address
    const payload = {
      name,
      email,
      company,
      url,
      details,
      deadline,
      priceRange
    };
    let data = new FormData();
    data.append("json", JSON.stringify(payload));
    console.log("Submitting from client", JSON.stringify(data));
    event.preventDefault();
    try {
      const response = await fetch(serverUrl + query, {
        method: "POST",
        mode: "no-cors",
        credentials: "same-origin", // TODO: change credentials on prod?
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: data
      });
      const json = await response.json();
      alert("success: ", JSON.stringify(json));
    } catch (err) {
      console.log("error: ", err);
    }
  }
  return (
    <div className="contact-container anim-fade-in">
      <p>
        If you have a question, inquiry, or just want to say hi, you can write
        me at <br></br>
        <a href="mailto:hi@ktype.xyz">hi@ktype.xyz</a> or use the form below.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="contact-dual-input-container">
          <div>
            Full Name: *
            <br />
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              name="name"
              size="43"
              autoComplete="off"
            />
          </div>
          <div>
            Email Address: *
            <br />
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              name="email"
              size="43"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="contact-dual-input-container">
          <div>
            Name of company/organization: *
            <br />
            <input
              value={company}
              onChange={e => setCompany(e.target.value)}
              type="text"
              name="company"
              size="43"
              autoComplete="off"
            />
            <br />
          </div>
          <div>
            Website URL:
            <br />
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              type="url"
              name="company"
              size="43"
              autoComplete="off"
            />
            <br />
          </div>
        </div>
        <div className="contact-dual-input-container">
          <div>
            What are your hopes and goals for this project? *
            <br />
            <textarea
              value={details}
              onChange={e => setDetails(e.target.value)}
              name="details"
              cols={43}
              rows={7}
            />
          </div>
          <div>
            Are there any deadlines we should be aware of?
            <br />
            <input
              value={deadline}
              onChange={e => setDeadline(e.target.value)}
              type="text"
              name="deadline"
              size="43"
              autoComplete="off"
            />
            <br />
            Do you have a budget range in mind? *
            <br />
            <select
              value={priceRange}
              onChange={e => setPriceRange(e.target.value)}
              width="200px"
            >
              <option value={0}>{priceRanges[0]}</option>
              <option value={1}>{priceRanges[1]}</option>
              <option selected value={2}>
                {priceRanges[2]}
              </option>
              <option value={3}>{priceRanges[3]}</option>
            </select>
          </div>
        </div>
        <br />
        <div className="k-mbv1">
          <button
            className="k-button"
            onClick={e => handleSubmit(e)}
            disabled={!(name && email && company && details && priceRange)}
          >
            Submit
          </button>
          {(name || email || company || details) &&
            !(name && email && company && details) && (
              <p
                style={{ fontSize: "0.9em", display: "inline", marginLeft: 25 }}
              >
                Please enter all required fields.
              </p>
            )}
        </div>
      </form>
    </div>
  );
}
