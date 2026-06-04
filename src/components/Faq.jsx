import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "How do I choose the right color temperature (Kelvin)?",
    answer:
      "2700K–3000K creates a warm ambience, while 4000K–5000K offers a brighter modern feel for workspaces."
  },
  {
    question: "Can I customize the finish on my light fixture?",
    answer:
      "Yes. We offer brass, matte black, chrome, bronze and several bespoke finishes."
  },
  {
    question: "What is the standard lead time for shipping?",
    answer:
      "Most projects ship within 2–4 weeks depending on customization requirements."
  },
  {
    question: "Do you provide on-site electrical work?",
    answer:
      "We work with certified partners and can coordinate installation services where available."
  },
  {
    question: "What is the duration of coverage?",
    answer:
      "All premium fixtures include a comprehensive warranty covering manufacturing defects."
  },
  {
    question: "How do I get expert design advice?",
    answer:
      "Book a consultation with our lighting specialists for personalized recommendations."
  }
];

function Faq() {
  const [active, setActive] = useState(null);

  const toggleFaq = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <p className="faq-subtitle">
        Comprehensive support for your lighting journey.
      </p>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span>{active === index ? "−" : "+"}</span>
            </div>

            <div
              className={`faq-answer ${
                active === index ? "show" : ""
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;