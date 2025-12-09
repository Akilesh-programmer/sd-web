import { Link } from "react-router-dom";
import { COMPANY_INFO, NAV_ITEMS, SERVICES } from "../../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-neutral-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">SD</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-xs text-secondary-400 font-medium">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Leading South India's textile industry for over three decades with
              100% quality yarn production and sustainable manufacturing
              practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center group"
                  >
                    <svg
                      className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-secondary-500 rounded-full mr-3"></span>
              Our Products
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/${service.id}`}
                    className="text-neutral-400 hover:text-secondary-400 text-sm transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2">{service.icon}</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={COMPANY_INFO.contact.brochure}
                download
                className="inline-flex items-center space-x-2 bg-secondary-600 hover:bg-secondary-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Download Brochure</span>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-accent-500 rounded-full mr-3"></span>
              Get In Touch
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-sm text-neutral-400">
                  <p>{COMPANY_INFO.contact.address.line1}</p>
                  <p>{COMPANY_INFO.contact.address.line2}</p>
                  <p>
                    {COMPANY_INFO.contact.address.city},{" "}
                    {COMPANY_INFO.contact.address.state}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="flex items-center space-x-3 text-sm text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-accent-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>{COMPANY_INFO.contact.phone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center space-x-3 text-sm text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-accent-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>{COMPANY_INFO.contact.email}</span>
              </a>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-xs text-neutral-500 mb-3 font-medium uppercase tracking-wider">
                  Follow Us
                </p>
                <div className="flex space-x-3">
                  <a
                    href={COMPANY_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5"
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
                    className="w-10 h-10 bg-neutral-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
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
                    className="w-10 h-10 bg-neutral-700 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5"
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
                    className="w-10 h-10 bg-neutral-700 hover:bg-neutral-900 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="X"
                  >
                    <svg
                      className="w-4 h-4"
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
        </div>
      </div>

      {/* Divider with gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center items-center">
          <p className="text-sm text-neutral-400">
            © {currentYear} {COMPANY_INFO.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
