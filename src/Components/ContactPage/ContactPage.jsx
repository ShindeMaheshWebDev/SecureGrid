import React, { useEffect, useRef, useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const sectionRef = useRef(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements =
        sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  // ✅ NEW BACKEND MAIL SUBMIT LOGIC
  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch(
        "https://securegrid.co.in/send-mail.php", // 👈 yaha apna real domain
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
    
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        form.reset();
      } else {
        setResult("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResult("Server error. Please try later.");
    }
  };

  const contactDetails = [
    {
      icon: "📍",
      title: "Address",
      content: [
        "A-203, Shaheen Chamber Comm, Premises, Co-op Society Dawood Baug Cross Lane, Off. J. P. Road, NR. P. K. Jewellers, Andheri West, Mumbai, 400058",
        "Pune Branch Address: Ground Floor, Plot No 12, Apartment, Harshad Society, Kothrud, Pune, Maharashtra, 411038",
      ],
    },
    {
      icon: "📞",
      title: "Phone",
      content: ["+91 9850810703", "+91 9922423721"],
    },
    {
      icon: "✉️",
      title: "Email",
      content: [
        "Tejas.mulay@securegrid.co.in",
        "Swanand.phatak@securegrid.co.in",
      ],
    },
  ];

  return (
    <div className="contact-wrapper" ref={sectionRef}>
      <div className="contact-hero-bg">
        <div className="dark-overlay"></div>

        <div className="container">
          <div className="contact-header animate-on-scroll fade-up-init">
            <h1>
              Contact <span className="orange-text">Us</span>
            </h1>
            <div className="scroll-line-container">
              <div className="scroll-line"></div>
            </div>
            <p>
              Secure Grid team is here to help you with your digital security and
              business needs.
            </p>
          </div>

          <div className="contact-main-grid">
            {/* LEFT INFO */}
            <div className="contact-info-list">
              {contactDetails.map((item, index) => (
                <div
                  className="info-item animate-on-scroll fade-left-init"
                  key={index}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="icon-circle">{item.icon}</div>
                  <div className="info-text">
                    <h3>{item.title}</h3>
                    {item.content.map((line, i) => (
                      <p key={i} className="info-line">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT FORM */}
            <div className="contact-form-card animate-on-scroll zoom-init">
              <h2>Send Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="input-box">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="input-box">
                  <textarea
                    name="message"
                    placeholder="Type your Message..."
                    rows="3"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="send-btn">
                  Send Now
                </button>
              </form>

              <p
                className="form-result-text"
                style={{
                  marginTop: "10px",
                  color: "#F7941D",
                  fontWeight: "bold",
                }}
              >
                {result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;




