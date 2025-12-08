import { COMPANY_INFO, SERVICES } from "../constants";
import ImageCarousel from "../components/common/ImageCarousel";

const Home = () => {
  return (
    <div className="bg-neutral-50">
      {/* Image Carousel */}
      <ImageCarousel />

      {/* Welcome Section */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-800 mb-6">
              Welcome to SHRI DHANALAKSHMI GROUPS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mb-8"></div>
          </div>

          <div className="space-y-6 text-neutral-700 text-lg leading-relaxed">
            <p className="text-center md:text-left">
              <strong className="text-primary-700">
                Shri Dhanalakshmi Groups
              </strong>{" "}
              is one of the leading <strong>100% Quality Yarn Producers</strong>{" "}
              of South India, Located in{" "}
              <strong>
                Coimbatore - Salem National Highways, Karumathampatti,
                Coimbatore
              </strong>
              .
            </p>

            <p className="text-center md:text-left">
              Shri Dhanalakshmi Groups has its successful background for the
              past <strong>3 decades</strong> in the Yarn Market because of its:
            </p>

            <div className="bg-white rounded-xl shadow-md p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-semibold mr-4 flex-shrink-0 mt-1">
                    ✓
                  </span>
                  <span>
                    <strong>
                      Highly motivated quality maintained work culture
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-semibold mr-4 flex-shrink-0 mt-1">
                    ✓
                  </span>
                  <span>
                    <strong>Customer requirement & awareness</strong> is made to
                    the grass root level work force
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-semibold mr-4 flex-shrink-0 mt-1">
                    ✓
                  </span>
                  <span>
                    <strong>Continuous result based</strong> refreshing and
                    training
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-semibold mr-4 flex-shrink-0 mt-1">
                    ✓
                  </span>
                  <span>
                    <strong>Fully Equipped, ultra modern machines</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-semibold mr-4 flex-shrink-0 mt-1">
                    ✓
                  </span>
                  <span>
                    <strong>Cordial relationship with work force</strong>{" "}
                    enjoyed over years
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl p-8 border-l-4 border-accent-600">
              <div className="flex items-start">
                <div className="text-4xl mr-4">🌱</div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-accent-800 mb-3">
                    Green Energy Manufacturing
                  </h3>
                  <p className="text-accent-900">
                    The manufacturing process of Shri Dhanalakshmi Groups
                    involves <strong>100% renewable electrical energy</strong>.
                    Thus the product comes out from Shri Dhanalakshmi Groups is
                    manufacturing through <strong>green energy</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="bg-gradient-to-br from-neutral-100 to-neutral-50 py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-neutral-800 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive textile solutions with cutting-edge technology and
              sustainable practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Placeholder Image */}
                <div className="relative h-56 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-3">{service.icon}</div>
                      <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        Image Placeholder
                      </span>
                    </div>
                  </div>
                  {/* Overlay Pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`,
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {service.name}
                  </h3>
                  <p className="text-neutral-600 mb-4">{service.description}</p>
                  <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center group">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 rounded-2xl p-12 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
            Experience three decades of excellence in textile manufacturing.
            Contact us today to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-700 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
            >
              Get in Touch
            </a>
            <a
              href={COMPANY_INFO.contact.brochure}
              download
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-block"
            >
              Download E-Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
