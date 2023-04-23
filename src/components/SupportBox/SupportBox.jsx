import React, { useState } from "react"
import { Button } from "react-bootstrap"
import "./supportBox.css";
import { useRef } from "react";
import { FiSend } from "react-icons/fi"
import { GiCrossMark } from 'react-icons/gi'
const SupportBox = () => {
    const [SCOpen, setSCOpen] = useState(false)
    const messages = [
        {
            sender: "buyer",
            fromSelf: true,
            message: "Hi, I'm interested in purchasing your product.Can you tell me more about it?",
            timestamp: "2023-04-23T10:30:00.000Z"
        },
        {
            sender: "seller",
            message: "Sure, it's a brand new laptop with 16GB of RAM, 1TB of storage, and a 10th Gen Intel Core i7 processor.It also comes with a 2-year warranty.",
            timestamp: "2023-04-23T10:35:00.000Z"
        },
        {
            sender: "buyer",
            fromSelf: true,
            message: "That sounds great. What;s the price?",
            timestamp: "2023-04-23T10:40:00.000Z"
        },
        {
            sender: "seller",
            message: "I'm asking $1200 for it.It's a fair price considering its specs and the warranty.",
            timestamp: "2023-04-23T10:45:00.000Z"
        },
        {
            sender: "buyer",
            fromSelf: true,
            message: "Hmm, that's a bit higher than I was expecting.Could you go lower?",
            timestamp: "2023-04-23T10:50:00.000Z"
        },
        {
            sender: "seller",
            message: "I can lower the price to $1100, but thats the lowest I can go.What do you think?",
            timestamp: "2023-04-23T10:55:00.000Z"
        },
        {
            sender: "buyer",
            fromSelf: true,
            message: "Okay, I'll take it.How do we proceed?",
            timestamp: "2023-04-23T11:00:00.000Z"
        },
        {
            sender: "seller",
            message: "Great! I'll send you an invoice via email.Once you've paid, I'll ship the laptop to you.",
            timestamp: "2023-04-23T11:05:00.000Z"
        }
    ];
    const sc_scrollRef = useRef();

    return (
        <div className="support_content">
            {
                SCOpen &&
                <div className="sc_box">
                    <div className="sc_header d-flex">
                        <div className="sc_user">
                            <img src="/img/support.png" alt="img" />
                        </div>
                        <div>
                            <h6>Chaintusker Support</h6>
                            <h5>Alamin Hossen</h5>
                        </div>
                        <span onClick={e=>setSCOpen(!SCOpen)} className="ml-auto cp">
                            <GiCrossMark />
                        </span>
                    </div>
                    <div className="sc_sms_box">
                        {messages.map((message, index) => (
                            <div ref={sc_scrollRef} key={index} className={`iq-message-body mb-3 ${message.fromSelf ? "iq-current-user" : "iq-other-user"}`}>
                                {
                                    !message.fromSelf &&
                                    <div className="chat-profile" >
                                        {message.user !== "buyer" &&
                                            <div className="latterpp">
                                                <span>AH</span>
                                            </div>
                                        }
                                        <small className="iq-chating p-0 mb-0 d-block">{message.time}</small>
                                    </div>
                                }
                                <div className="iq-chat-text">
                                    <div className={`d-flex align-items-center justify-content-${message.fromSelf ? "end" : "start"}`}>
                                        <div className="iq-chating-content sc_sms_content d-flex align-items-center ">
                                            <p className="mr-2 mb-0">{message.message}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}                </div>
                    <div className="sc_form">
                        <input className="form-control" placeholder="Type a message ..." />
                        <FiSend />
                    </div>
                </div>
            }
            {
                !SCOpen &&
                <Button onClick={e=>setSCOpen(!SCOpen)} className="s_toggle btn_rounded cp">
                    <img src="/img/support.png" alt="img" />
                    <span>Get Support</span>
                </Button>
            }
        </div>
    )
}

export default SupportBox