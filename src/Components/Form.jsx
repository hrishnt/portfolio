import "./FormStyles.css";
import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");
  const [status, setStatus] = React.useState("idle"); // idle | loading | sent

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "641c7355-bbaf-43b9-b56f-3b44447736f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      setStatus("sent");
      event.target.reset();
    } else {
      setResult(data.message || "Something went wrong.");
      setStatus("idle");
    }

    // Reset button status after a few seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Subject</label>
        <input type="text" name="subject" required />

        <label>Message</label>
        <textarea name="message" rows="6" placeholder="Type Your Message Here" required />

        <button className="btn" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : status === "sent" ? "Sent ✅" : "Submit"}
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
}
