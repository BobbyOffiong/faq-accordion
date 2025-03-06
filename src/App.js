import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // (Optional for components like modals, tooltips)
import InstallPWA from "./InstallPWA.js";


export default function App() {
    const [faqs, setFaqs] = useState([
        {
            question: "How many team members can I invite?",
            answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
            open: false
        },

        {
            question: "What is the maximum file upload size?",
            answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
            open: true
        },

        {
            question: "How do I reset my password?",
            answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
            open: false
        },

        {
            question: "Can I cancel my subscription?",
            answer: "Yes! Send us a message and we’ll process your request no questions asked.",
            open: false
        },

        {
            question: "Do you provide additional support?",
            answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
            open: false,
        }
    ]);

    const toggleFAQs = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    return (
        <>
            <div className="contentDiv rounded-4">
                <div className="picturesDiv">
                <div className="pictureDiv">
                    <div className="womanPic">
                        <div className="box"></div>

                        <picture>
                        
                        </picture>
                    </div>
                </div></div>


                <div className="faqDiv">
                    <h1 className="mb-3 faqHeader">FAQ</h1>

                    <div className="faqs pb-5">
        {faqs.map((faq, index) => (
          <div
          className={"faq " + (faq.open ? "open" : "")}
          key={index}
          onClick={() => toggleFAQs(index)}
        >
          <div className="faq-question py-3">{faq.question}</div>
          <div className="faq-answer">{faq.answer}</div>
        </div>
        ))}
      </div>
                </div>
            </div>
            <div className="button-div mt-5"><InstallPWA /></div>

            </>
    );
}