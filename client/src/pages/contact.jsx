import React, { useState } from "react";
import theme from "../theme";
import "./contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priceRange, setPriceRange] = useState(0);
  const priceRanges = ["Under $5K", "Under $10K", "Under $15K", "$20K+"];

  async function handleSubmit(event) {
    event.preventDefault();
    const serverUrl = "/api/mail";
    const query = `?name=${name}&email=${email}&company=${company}&url=${url ||
      "no website provided"}&details=${details}&deadline=${deadline ||
      "idk, because they didn't provide a deadline"}&priceRange=${
      priceRanges[priceRange]
    }"`;
    const payload = {
      name,
      email,
      company,
      url,
      details,
      deadline,
      priceRange
    };
    //let data = new FormData();
    //data.append("json", JSON.stringify(payload));
    //console.log("sent this data", JSON.stringify(data));
    //try {
    let response = await fetch(serverUrl + query, {
      method: "POST",
      //mode: "no-cors",
      //credentials: "same-origin", // TODO: change credentials on prod?
      headers: {
        //Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload) //data // json.stringify?
    });
    response = await response.json();
    console.log("res", res);
    if (response.status === 200) {
      alert("Success! Your message was sent.");
    } else {
      alert(
        "Oops, your message failed to send! Try again, or email hi@ktype.xyz directly."
      );
    }
  }
  return (
    <div className="contact-container anim-fade-in">
      <p>
        If you have a question, inquiry, or just want to say hi, you can write
        me at <br></br>
        <a href="mailto:hi@ktype.xyz">hi@ktype.xyz</a> or use the form below.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "0 auto",
          marginTop: theme.sizes.spacingV1,
          marginBottom: theme.sizes.spacingV2
        }}
      >
        <div className="contact-subcontainer">
          <div>
            <label for="name">Full Name: *</label>
            <br />
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              name="name"
              autoComplete="off"
            />
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
            <label for="company"> Name of company/organization: *</label>
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
            </select>
          </div>
          <div>
            <label for="details">
              What are your hopes and goals for this project? *
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
            disabled={!(name && email && company && details && deadline)}
          >
            Submit
          </button>
          {(name || email || company || details || deadline) &&
            !(name && email && company && details && deadline) && (
              <p style={{ fontSize: "0.9em", display: "inline" }}>
                * Please enter all required fields.
              </p>
            )}
        </div>
      </form>
    </div>
  );
}
