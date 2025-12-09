import { useState } from "react";
import { COMPANY_INFO } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can add API call or email service integration here
    alert("Thank you for contacting us! We will get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      subject: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactDetails = [
    {
      icon: "📞",
      title: "Office",
      value: "0421 - 233 546, 233 547",
      link: "tel:04212333546",
    },
    {
      icon: "👤",
      title: "Account",
      value: "+91 98652 33546",
      link: "tel:+919865233546",
    },
    {
      icon: "💼",
      title: "HR",
      value: "+91 98421 33546",
      link: "tel:+919842133546",
    },
    {
      icon: "🛒",
      title: "Sales",
      value: "+91 73586 33546",
      link: "tel:+917358633546",
    },
    {
      icon: "📏",
      title: "Sizing",
      value: "+91 99655 03547",
      link: "tel:+919965503547",
    },
  ];

  return (
    <div className="bg-neutral-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-primary-700 via-secondary-600 to-accent-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
            }}
          ></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Get in Touch with Our Team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="section-container px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12 lg:items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col h-full">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-800 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-neutral-700 mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-neutral-700 mb-2"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none"
                    placeholder="Enter subject"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-neutral-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-neutral-700 mb-2"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-neutral-700 mb-2"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 flex-1">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-800 mb-6">
                  Contact Information
                </h2>

                {/* Address */}
                <div className="mb-8">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-neutral-800 mb-2">
                        Address
                      </h3>
                      <p className="text-neutral-600 leading-relaxed text-sm">
                        S.F. NO. 226/3, NH-47,
                        <br />
                        AVINASHI ROAD, KARUMATHAMPATTI,
                        <br />
                        COIMBATORE (DT), TAMIL NADU - 641 659.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="mb-8">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-neutral-800 mb-2">
                        Website
                      </h3>
                      <a
                        href="http://www.shridhanalakshmi.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 font-medium break-all"
                      >
                        www.shridhanalakshmi.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-neutral-800 mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:dhanalakshmispinntex@gmail.com"
                        className="text-primary-600 hover:text-primary-700 font-medium break-all"
                      >
                        dhanalakshmispinntex@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div>
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-neutral-800 mb-3">
                        Phone Numbers
                      </h3>
                      <div className="space-y-3">
                        {contactDetails.map((contact, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between gap-2 py-2 border-b border-neutral-100 last:border-0"
                          >
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="text-lg">{contact.icon}</span>
                              <span className="text-sm font-medium text-neutral-700 whitespace-nowrap">
                                {contact.title}:
                              </span>
                            </div>
                            <a
                              href={contact.link}
                              className="text-primary-600 hover:text-primary-700 font-medium text-sm whitespace-nowrap"
                            >
                              {contact.value}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links - Centered */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl shadow-lg p-6 md:p-8 text-white text-center">
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="flex justify-center gap-6">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href={COMPANY_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>

                <a
                  href={COMPANY_INFO.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="X"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section-container px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8 border-b border-neutral-200">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-800 mb-2">
                Our Location
              </h2>
              <p className="text-neutral-600">
                Find us on the map - Visit our facility in Coimbatore
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=11_8Pf3w3Ci_NFd-i2_9DtGHmtes&ehbc=2E312F&ll=11.123328300000006%2C77.20315930000001&z=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shri Dhanalakshmi Groups Location"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Map Info Footer */}
            <div className="p-6 bg-neutral-50 border-t border-neutral-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-neutral-800">
                      Shri Dhanalakshmi Groups
                    </p>
                    <p className="text-sm text-neutral-600">
                      Karumathampatti, Coimbatore
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/d/u/0/viewer?mid=11_8Pf3w3Ci_NFd-i2_9DtGHmtes&femb=1&ll=11.123328300000006%2C77.20315930000001&z=17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <span>Get Directions</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary-700 via-secondary-600 to-accent-600 rounded-2xl p-12 md:p-16 text-center text-white shadow-2xl">
            <div className="text-5xl mb-4">🕐</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Business Hours
            </h2>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              Monday - Saturday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-white/80">Sunday: Closed</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
