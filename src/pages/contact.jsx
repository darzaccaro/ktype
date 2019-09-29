import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priceRange, setPriceRange] = useState(2);
  const priceRanges = [
    "< $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 +"
  ];
  function resetForm() {
    setName("");
    setEmail("");
    setSubject("");
    setDetails("");
    setDeadline("");
    setPriceRange(2);
  }
  function handleSubmit(event) {
    console.log(
      "Submitting from client",
      name,
      email,
      subject,
      details,
      deadline,
      priceRange
    );
    //TODO: post req
    fetch("http://localhost:3000/testmail", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify({
        name,
        email,
        subject,
        details,
        deadline,
        priceRange
      })
    }).then(response => console.log("Got back", response.json()));
    event.preventDefault();
  }
  return (
    <div>
      <p>
        If you have a question, inquiry, or just want to say hi, you can write
        me at <a href="mailto:hi@ktype.xyz">hi@ktype.xyz</a> or use the form
        below.
      </p>
      <form
        // action="http://localhost:3000/testmail"
        // method="post"
        // encType="text/plain"
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            Full Name:
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
            Email Address:
            <br />
            <input
              // TODO: validate e-mail
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              name="email"
              autoComplete="off"
            />
          </div>
        </div>
        Subject:
        <br />
        <input
          value={subject}
          onChange={e => setSubject(e.target.value)}
          type="text"
          name="subject"
          size="50"
          autoComplete="off"
        />
        <br />
        <div>
          Project Details: Who are you? What are your goals for this project?
          <br />
          <textarea
            value={details}
            onChange={e => setDetails(e.target.value)}
            name="details"
            cols={40}
            rows={8}
          />
        </div>
        When does this project need to be finished?
        <br />
        <input
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
          type="text"
          name="deadline"
          size="50"
          autoComplete="off"
        />
        <br />
        <select
          value={priceRange}
          onChange={e => setPriceRange(e.target.value)}
        >
          <option value={0}>{priceRanges[0]}</option>
          <option value={1}>{priceRanges[1]}</option>
          <option selected value={2}>
            {priceRanges[2]}
          </option>
          <option value={3}>{priceRanges[3]}</option>
        </select>
        <br />
        <div>
          <button onClick={e => handleSubmit(e)}>Submit</button>
          <button onClick={e => resetForm()}>Reset</button>
        </div>
      </form>
    </div>
  );
}
