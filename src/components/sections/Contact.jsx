import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_al4xas6";
  const TEMPLATE_ID = "template_ovh4lsf";
  const PUBLIC_KEY = "zBd1qGaeLp53pDPkG";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again.")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black"
    >
      <div className="flex flex-col items-center w-full max-w-md px-4">
        <h2
          className="text-3xl font-bold mb-12 text-center
          bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent
          transform transition duration-500 ease-out hover:-translate-y-1"
        >
          Get In Touch
        </h2>

        <form className="w-full space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
            transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
            transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
            transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium
            transition transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};