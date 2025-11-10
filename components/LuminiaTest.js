import { useState } from "react";

export default function LuminiaTest() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState([]);

  const sendMessage = async () => {
    if (!input) return;

    try {
      const res = await fetch("https://luminia-eight.vercel.app/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setLog([...log, { user: input, bot: data.reply }]);
      setInput("");
    } catch (err) {
      setLog([...log, { user: input, bot: "Error sending message" }]);
      console.error(err);
      setInput("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div>
        {log.map((entry, i) => (
          <div key={i}>
            <p><b>You:</b> {entry.user}</p>
            <p><b>Luminia:</b> {entry.bot}</p>
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "70%", padding: 5 }}
      />
      <button onClick={sendMessage} style={{ padding: 5, marginLeft: 5 }}>Send</button>
    </div>
  );
}
