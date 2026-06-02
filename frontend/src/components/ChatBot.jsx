import React, { useState, useEffect, useRef } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import API from "../utils/api";

const ChatBot = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [language, setLanguage] = useState("en");
    const welcomeMessage = {
        en: `👋 Hello! Welcome to Quirex.

🏠 I can help you:
• Find Properties
• Search by Location
• Contact Support
• Learn About Quirex

How can I assist you today?`,

        hi: `👋 नमस्ते! Quirex में आपका स्वागत है।

🏠 मैं आपकी मदद कर सकता हूँ:
• प्रॉपर्टी खोजने में
• लोकेशन खोजने में
• सहायता प्राप्त करने में
• Quirex के बारे में जानकारी देने में

मैं आपकी कैसे सहायता कर सकता हूँ?`
    };


    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: welcomeMessage.en
        }
    ]);


    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const userText = message;

        setMessages((prev) => [
            ...prev,
            {
                sender: "user",
                text: userText
            }
        ]);

        setMessage("");

        const msg = userText.toLowerCase().trim();

        // HELLO

        if (
            msg === "hi" ||
            msg === "hello" ||
            msg === "hey" ||
            msg === "namaste"
        ) {
            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text:
                        language === "hi"
                            ? "😊 नमस्ते! मैं आपकी कैसे सहायता कर सकता हूँ?"
                            : "😊 Hello! How can I assist you today?"
                }
            ]);
            return;
        }

        // ABOUT QUIREX

        if (
            msg.includes("what is quirex") ||
            msg.includes("about quirex") ||
            msg.includes("quirex kya hai")
        ) {
            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text:
                        language === "hi"
                            ? "🏠 Quirex एक रियल एस्टेट प्लेटफॉर्म है जहाँ आप विभिन्न स्थानों की प्रॉपर्टीज खोज सकते हैं।"
                            : "🏠 Quirex is a real estate platform where users can search, explore and discover properties in different locations."
                }
            ]);
            return;
        }

        // CONTACT

        if (
            msg.includes("contact") ||
            msg.includes("support") ||
            msg.includes("help")
        ) {
            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text:
                        language === "hi"
                            ? "📞 आप Contact Us पेज के माध्यम से हमसे संपर्क कर सकते हैं।"
                            : "📞 You can contact us using the Contact Us page available on Quirex."
                }
            ]);
            return;
        }

        // PROPERTY SEARCH

        try {
            const response = await API.get(
                `/api/search-list?location=${userText}`
            );

            if (
                response?.data?.code === 200 &&
                response?.data?.data?.length > 0
            ) {
                const propertyText = response.data.data
                    .slice(0, 5)
                    .map(
                        (item) =>
                            `🏠 ${item.title}
📍 ${item.location}
💰 ₹${item.price}`
                    )
                    .join("\n\n");

                setMessages((prev) => [
                    ...prev,
                    {
                        sender: "bot",
                        text: propertyText
                    },
                    {
                        sender: "bot",
                        text:
                            language === "hi"
                                ? "😊 आशा है यह जानकारी आपके लिए उपयोगी रही होगी।"
                                : "😊 Hope this helps! Let me know if you'd like to explore another location."
                    }
                ]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    {
                        sender: "bot",
                        text:
                            language === "hi"
                                ? "❌ इस लोकेशन में कोई प्रॉपर्टी नहीं मिली।"
                                : "❌ No property found in that location."
                    }
                ]);
            }
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: "⚠️ Something went wrong."
                }
            ]);
        }
    };

    return (
        <>
            {/* Floating Button */}

            <div
                className="chatbot-btn"
                onClick={() => setOpen(!open)}
            >
                <BsChatDotsFill />
            </div>

            {/* Chat Window */}

            {open && (
                <div className="chat-window">

                    <div className="chat-header">

                        <div>
                            <div className="assistant-title">
                                Quirex Assistant
                            </div>

                            <small className="assistant-status">
                                🟢 Online
                            </small>
                        </div>

                        <div className="chat-actions">

                            <button
                                className={`lang-btn ${language === "en" ? "active-lang" : ""}`}
                                onClick={() => {
                                    setLanguage("en");
                                    setMessages([
                                        {
                                            sender: "bot",
                                            text: welcomeMessage.en
                                        }
                                    ]);
                                }}
                            >
                                EN
                            </button>

                            <button
                                className={`lang-btn ${language === "hi" ? "active-lang" : ""}`}
                                onClick={() => {
                                    setLanguage("hi");
                                    setMessages([
                                        {
                                            sender: "bot",
                                            text: welcomeMessage.hi
                                        }
                                    ]);
                                }}
                            >
                                हिंदी
                            </button>

                            <button
                                className="chat-close"
                                onClick={() => setOpen(false)}
                            >
                                ✕
                            </button>

                        </div>

                    </div>

                    <div className="chat-body">
                        {messages.length === 1 && (
                            <div className="quick-actions">

                                <button onClick={() => setMessage("Hyderabad")}>
                                    Hyderabad
                                </button>

                                <button onClick={() => setMessage("Bangalore")}>
                                    Bangalore
                                </button>

                                <button onClick={() => setMessage("What is Quirex")}>
                                    About Quirex
                                </button>

                            </div>
                        )}
                        {messages.map((item, index) => (
                            <div
                                key={index}
                                className={
                                    item.sender === "user"
                                        ? "user-msg"
                                        : "bot-msg"
                                }
                            >
                                {item.text}
                            </div>
                        ))}

                        <div ref={bottomRef}></div>

                    </div>

                    <div className="chat-footer">

                        <input
                            type="text"
                            value={message}
                            placeholder="Search location or ask a question..."
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                            onKeyDown={(e) =>
                                e.key === "Enter" && sendMessage()
                            }
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