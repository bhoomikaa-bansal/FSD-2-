import React, { useState } from "react";
import Button from "../components/Button";
import TextField from "../components/TextField";
import Select from "../components/Select";
import Rating from "../components/Rating";
import Checkbox from "../components/Checkbox";

function Contact() {
  const [message, setMessage] = useState("");
  const [queryType, setQueryType] = useState("General");
  const [urgent, setUrgent] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "20px", maxWidth: "600px", width: "100%" }}>
        <h1 style={{ textAlign: "center" }}>Contact Us</h1>
        <p style={{ textAlign: "center" }}>
          Have a question? Reach out to our team directly.
        </p>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <h3>Send a Email</h3>

          <Select
            label="Query Type"
            options={["General Inquiry", "Technical Support", "Billing Issue"]}
            value={queryType}
            onChange={(e) => setQueryType(e.target.value)}
          />

          <TextField
            label="Your Message"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Checkbox
            label="Send your name"
            checked={urgent}
            onChange={(e) => setUrgent(e.target.checked)}
          />

          <Rating label="Rate our support speed (if applicable)" />

          <Button
            text="Send Message"
            onClick={() => alert("Message Sent Successfully!")}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
