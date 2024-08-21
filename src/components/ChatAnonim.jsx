import React, { useState, useRef } from "react";
import Swal from "sweetalert2";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);
  const [messageCount, setMessageCount] = useState(0);

  const messagesEndRef = useRef(null);

  // Fungsi untuk scroll ke bawah otomatis
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
    }, 100);
  };

  // Fungsi untuk mengirim pesan
  const sendMessage = () => {
    if (message.trim() !== "") {
      if (messageCount >= 20) { // Batasan pesan per hari (20 pesan)
        Swal.fire({
          icon: "error",
          title: "Message limit exceeded",
          text: "You have reached your daily message limit.",
          customClass: {
            container: "sweet-alert-container",
          },
        });
        return;
      }

      const trimmedMessage = message.trim().substring(0, 60);
      const newMessage = {
        message: trimmedMessage,
        sender: {
          image: "/AnonimUser.png", // Gambar default pengguna
        },
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessageCount((prevCount) => prevCount + 1);

      setMessage(""); // Menghapus pesan setelah mengirim
      setTimeout(() => {
        setShouldScrollToBottom(true);
      }, 100);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="" id="ChatAnonim">
      <div className="text-center text-4xl font-semibold" id="Glow">
        Text Anonim
      </div>

      <div className="mt-5" id="KotakPesan" style={{ overflowY: "auto", maxHeight: "500px" }}>
        {messages.map((msg, index) => (
          <div key={index} className="flex items-start text-sm py-[1%]">
            <img src={msg.sender.image} alt="User Profile" className="h-7 w-7 mr-2" />
            <div className="relative top-[0.30rem]">{msg.message}</div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div id="InputChat" className="flex items-center mt-5">
        <input
          className="bg-transparent flex-grow pr-4 w-4 placeholder:text-white placeholder:opacity-60"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ketik pesan Anda..."
          maxLength={60}
        />
        <button onClick={sendMessage} className="ml-2">
          <img src="/paper-plane.png" alt="" className="h-4 w-4 lg:h-6 lg:w-6" />
        </button>
      </div>
    </div>
  );
}

export default Chat;
