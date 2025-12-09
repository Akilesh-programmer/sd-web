import { Link } from "react-router-dom";
import { SERVICES } from "../constants";

const Spinning = () => {
  const machineBrands = [
    { id: 1, name: "LMW Coimbatore", category: "Spinning Machines" },
    { id: 2, name: "Trutzschler Germany", category: "Preparatory" },
    { id: 3, name: "Rieter Switzerland", category: "Drawings" },
    { id: 4, name: "Murata Japan", category: "Autoconer" },
    { id: 5, name: "Schlafhorst Germany", category: "Autoconer" },
    { id: 6, name: "Susessen Elite", category: "Compact System" },
  ];

  return (
    <div className="bg-neutral-50 overflow-x-hidden">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-primary-800 to-primary-900 overflow-hidden">
        {/* Placeholder Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
            }}
          ></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Spinning Division
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Excellence in Yarn Manufacturing
            </p>
          </div>
        </div>

        {/* Image Placeholder Indicator */}
        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
          <span className="text-white/70 text-sm">Hero Image Placeholder</span>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-12 mb-12">
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-800 leading-relaxed text-center font-medium mb-8">
              Shri Dhanalakshmi Groups is one of the{" "}
              <span className="text-primary-700">
                largest manufacturers of yarn
              </span>{" "}
              in terms of installed spindleage capacity.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white shadow-lg">
              <div className="flex items-start">
                <div className="text-5xl mr-4">🏭</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">33,000 Spindles</h3>
                  <p className="text-primary-100">
                    Installed capacity with modern machines
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-xl p-8 text-white shadow-lg">
              <div className="flex items-start">
                <div className="text-5xl mr-4">📦</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">4,000 MT/Year</h3>
                  <p className="text-secondary-100">
                    Annual yarn production capacity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-800 mb-8 text-center">
              Our Capabilities
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-neutral-700">
                    We are producing{" "}
                    <strong>all types of yarns for weaving and knitting</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-5 h-5 text-secondary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-neutral-700">
                    Our major specialization is{" "}
                    <strong>combed and compact weaving</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-5 h-5 text-accent-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-neutral-700">
                    Count ranges from <strong>30s to 80s</strong>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 mt-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">⭐</div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                      Premium Quality
                    </h4>
                    <p className="text-neutral-700">
                      More than{" "}
                      <strong className="text-primary-700">
                        60% of Spindles
                      </strong>{" "}
                      are installed with{" "}
                      <strong className="text-primary-700">
                        Susessen Elite Compact System
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-800 mb-4 text-center">
              Equipped with World-Class Machinery
            </h2>
            <p className="text-center text-neutral-600 mb-8">
              State-of-the-art equipment from leading global manufacturers
            </p>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-50 rounded-lg p-4 border-l-4 border-primary-500">
                  <p className="text-neutral-700">
                    <strong className="text-primary-700">
                      Spinning Machines:
                    </strong>{" "}
                    LMW Coimbatore
                  </p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4 border-l-4 border-primary-500">
                  <p className="text-neutral-700">
                    <strong className="text-primary-700">Preparatory:</strong>{" "}
                    Trutzschler Germany
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-50 rounded-lg p-4 border-l-4 border-secondary-500">
                  <p className="text-neutral-700">
                    <strong className="text-secondary-700">Drawings:</strong>{" "}
                    Rieter Switzerland
                  </p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4 border-l-4 border-secondary-500">
                  <p className="text-neutral-700">
                    <strong className="text-secondary-700">Autoconer:</strong>{" "}
                    Murata Japan
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-neutral-50 rounded-lg p-4 border-l-4 border-accent-500">
                  <p className="text-neutral-700">
                    <strong className="text-accent-700">Autoconer:</strong>{" "}
                    Schlafhorst Germany
                  </p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4 border-l-4 border-accent-500">
                  <p className="text-neutral-700">
                    <strong className="text-accent-700">Compact System:</strong>{" "}
                    Susessen Elite (60%+ Spindles)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Brands Section */}
      <section className="bg-gradient-to-br from-neutral-100 to-neutral-50 py-16">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-neutral-800 mb-4 text-center">
              We Have the Following Machines
            </h2>
            <p className="text-center text-neutral-600 mb-12">
              Trusted brands from around the world
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {machineBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center"
                >
                  {/* Placeholder for Brand Logo */}
                  <div className="w-full aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center p-2">
                      <svg
                        className="w-12 h-12 mx-auto text-neutral-400 mb-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs text-neutral-500">Logo</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-800 text-center mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-neutral-500 text-center">
                    {brand.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section - Reused from Home */}
      <section className="section-container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-3 md:mb-4">
              Our Products
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
              Comprehensive textile solutions with cutting-edge technology and
              sustainable practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
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
                  <Link
                    to={`/${service.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center group"
                  >
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 rounded-2xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Need High-Quality Yarn?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
              Contact us today to discuss your yarn requirements. We deliver
              excellence in every spindle.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-700 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spinning;
