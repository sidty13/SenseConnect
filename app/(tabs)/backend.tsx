import React, { useState, FormEvent } from 'react';

const ESPForm: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("http://192.168.4.1/submit", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `message=${encodeURIComponent(message)}`
    })
    .then(response => response.text())
    .then(data => alert("Response from ESP8266: " + data))
    .catch(error => console.error("Error:", error));
  };

  return (
    <div>
      <h2>Send Data to ESP8266</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ESPForm;
