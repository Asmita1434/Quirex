import React, { useState, useEffect, useRef } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import API from "../utils/api";
import { botKnowledge } from "../data/chatbotData";
import { detectIntent, extractCity, getCurrentTime } from "../utils/chatbotUtils";

const ChatBot = () => {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("en");
    const [message, setMessage] = useState("");
    const [typing, setTyping] = useState(false);
    const [showHint, setShowHint] = useState(true);

    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: botKnowledge.welcome.en,
            time: getCurrentTime(),
        },
    ]);

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (open) {
            setShowHint(false);
            return;
        }

        const interval = setInterval(() => {
            setShowHint(true);

            setTimeout(() => {
                setShowHint(false);
            }, 5000);

        }, 12000);

        return () => clearInterval(interval);
    }, [open]);

    const addBotMessage = (text) => {
        setMessages((prev) => [
            ...prev,
            {
                sender: "bot",
                text,
                time: getCurrentTime(),
            },
        ]);
    };

    const sendMessage = async () => {
        if (!message.trim()) return;

        const text = message.trim();

        setMessages((prev) => [
            ...prev,
            {
                sender: "user",
                text,
                time: getCurrentTime(),
            },
        ]);

        setMessage("");
        setTyping(true);

        setTimeout(async () => {
            const intent = detectIntent(text);


            const city = extractCity(text);

            if (city) {
                try {
                    const res = await API.get(`/api/search-list?location=${city}`);

                    if (res.data.code === 200 && res.data.data.length > 0) {
                        const result = res.data.data
                            .map(
                                (p) =>
                                    `🏠 ${p.title}\n📍 ${p.location}\n💰 ₹${p.price}\n📐 ${p.area} Sq Ft`
                            )
                            .join("\n\n");

                        addBotMessage(result);
                    } else {
                        addBotMessage(
                            language === "en"
                                ? `No properties found in ${city}.`
                                : `${city} में कोई प्रॉपर्टी नहीं मिली।`
                        );
                    }
                } catch {
                    addBotMessage(
                        language === "en"
                            ? "Server error."
                            : "सर्वर त्रुटि।"
                    );
                }

                setTyping(false);
                return;
            }

            if (intent) {
                addBotMessage(botKnowledge[intent][language]);
                setTyping(false);
                return;
            }

            addBotMessage(
                language === "en"
                    ? "Sorry, I didn't understand that. Try asking about properties, cities, contact or Quirex."
                    : "क्षमा करें, मैं समझ नहीं पाया।"
            );

            setTyping(false);
        }, 900);
    };

    return (
        <>
            <div className="chatbot-wrapper">

                {showHint && !open && (
                    <div className="chatbot-hint">
                        👋 Hi! Need any help?
                    </div>
                )}

                <div
                    className="chatbot-btn"
                    onClick={() => setOpen(!open)}
                >
                    <BsChatDotsFill />
                </div>

            </div>
            {open && (
                <div className="chat-window">

                    <div className="chat-header">
                        <div className="assistant-info">

                            <div className="assistant-logo">
                                🏠
                            </div>

                            <div>

                                <h4>Quirex Assistant</h4>

                                <small>🟢 Online</small>

                            </div>

                        </div>

                        <div>
                            <button onClick={() => setLanguage("en")}>EN</button>
                            <button onClick={() => setLanguage("hi")}>हिं</button>
                            <button onClick={() => setOpen(false)}>✕</button>
                        </div>
                    </div>

                    <div className="chat-body">

                        {messages.map((m, i) => (

                            <div
                                key={i}
                                className={`chat-message ${m.sender}`}
                            >

                                {m.sender === "bot" &&

                                    <div className="bot-avatar">
                                        🤖
                                    </div>

                                }

                                <div
                                    className={
                                        m.sender === "user"
                                            ? "user-msg"
                                            : "bot-msg"
                                    }
                                >

                                    <p>{m.text}</p>

                                    <small>{m.time}</small>

                                </div>

                                {m.sender === "user" &&

                                    <div className="user-avatar">
                                        👤
                                    </div>

                                }

                            </div>

                        ))}

                        {typing && (

                            <div className="chat-message bot">

                                <div className="bot-avatar">
                                    🤖
                                </div>

                                <div className="bot-msg">

                                    <div className="typing">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>

                                </div>

                            </div>

                        )}

                        <div ref={bottomRef}></div>

                    </div>

                    <div className="chat-footer">

                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={
                                language === "en"
                                    ? "Ask anything..."
                                    : "कुछ पूछें..."
                            }
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />

                        <button onClick={sendMessage}>
                            Send
                        </button>

                    </div>

                </div>
            )}
        </>
    );
};

export default ChatBot;
