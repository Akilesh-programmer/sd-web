import { SERVICES } from "../constants";

const Weaving = () => {
  const machines = [
    { id: 1, name: "Airjet Loom", category: "Weaving Machine" },
    { id: 2, name: "Sulzer Loom", category: "Weaving Machine" },
  ];

  const weaveTypes = [
    { name: "Plain", icon: "◻️" },
    { name: "Oxford", icon: "◼️" },
    { name: "Twill", icon: "◽" },
    { name: "Drill", icon: "▪️" },
    { name: "Satin", icon: "◾" },
  ];

  const finishTypes = [
    { name: "Grey", icon: "⬜" },
    { name: "Bleached", icon: "⬛" },
  ];

  const fabricWidthRanges = [
    { category: "Grey", range: "74 to 355 Cms" },
    { category: "Shirtings", range: "110 to 150 Cms" },
    { category: "Bottoms Weight", range: "110 to 150 Cms" },
    { category: "Bed Linen", range: "Up to 305 Cms" },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-primary-700 to-primary-900 overflow-hidden">
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
              Weaving Division
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Advanced Fabric Manufacturing Excellence
            </p>
          </div>
        </div>

        {/* Image Placeholder Indicator */}
        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
          <span className="text-white/70 text-sm">Hero Image Placeholder</span>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Since Millennium Year 2000
              </div>
              <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed font-medium">
                In the Millennium Year 2000, integrated{" "}
                <strong className="text-primary-700">
                  Vertical Facilities
                </strong>{" "}
                like{" "}
                <strong className="text-primary-700">
                  Spinning, Sizing and Energy
                </strong>{" "}
                helps to produce{" "}
                <strong className="text-primary-700">
                  Large and consistent quality of fabrics
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Production Capacity Card */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 md:p-10 text-white shadow-lg mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="text-6xl mr-4">📊</div>
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  10 Million Meters
                </h3>
                <p className="text-xl text-primary-100">Of fabrics per annum</p>
              </div>
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-800 mb-8 text-center">
              Our Manufacturing Capabilities
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
                    Ability to produce{" "}
                    <strong className="text-primary-700">
                      Plain, Oxford, Twill, Drill and Satin fabrics
                    </strong>
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
                    Our Specialisation in manufacturing{" "}
                    <strong className="text-secondary-700">
                      Narrow and Wider width fabric up to 120 Inches
                    </strong>{" "}
                    in the{" "}
                    <strong className="text-secondary-700">
                      200 TC to 1000 TC range
                    </strong>
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
                    We produce with{" "}
                    <strong className="text-accent-700">
                      up to 8 pick insertions
                    </strong>
                    , with maximum{" "}
                    <strong className="text-accent-700">
                      warp density of 225 ends/inch
                    </strong>{" "}
                    with{" "}
                    <strong className="text-accent-700">
                      warp counts up to 120s Ne
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Specifications Section */}
      <section className="bg-gradient-to-br from-neutral-100 to-neutral-50 py-16">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-neutral-800 mb-4 text-center">
              Fabric Specifications
            </h2>
            <p className="text-center text-neutral-600 mb-12">
              Comprehensive range of weaves, finishes, and widths
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Types of Weave */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <span className="text-3xl">🧵</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-neutral-800">
                    Types of Weave
                  </h3>
                </div>
                <ul className="space-y-3">
                  {weaveTypes.map((weave, index) => (
                    <li
                      key={index}
                      className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors"
                    >
                      <span className="text-2xl mr-3">{weave.icon}</span>
                      <span className="font-medium">{weave.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Types of Finish */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
                    <span className="text-3xl">✨</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-neutral-800">
                    Types of Finish
                  </h3>
                </div>
                <ul className="space-y-3">
                  {finishTypes.map((finish, index) => (
                    <li
                      key={index}
                      className="flex items-center text-neutral-700 hover:text-secondary-600 transition-colors"
                    >
                      <span className="text-2xl mr-3">{finish.icon}</span>
                      <span className="font-medium">{finish.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fabric Width Range */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                    <span className="text-3xl">📏</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-neutral-800">
                    Fabric Width Range
                  </h3>
                </div>
                <ul className="space-y-4">
                  {fabricWidthRanges.map((item, index) => (
                    <li
                      key={index}
                      className="border-l-4 border-accent-500 pl-4 py-2 hover:border-accent-600 transition-colors"
                    >
                      <div className="font-semibold text-neutral-800">
                        {item.category}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {item.range}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Section */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-neutral-800 mb-4 text-center">
            Our Weaving Machines
          </h2>
          <p className="text-center text-neutral-600 mb-12">
            Advanced looms for superior fabric quality
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {machines.map((machine) => (
              <div
                key={machine.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Placeholder for Machine Logo */}
                <div className="h-64 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg
                      className="w-20 h-20 mx-auto text-neutral-400 mb-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-neutral-500">
                      Machine Image Placeholder
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold text-neutral-800 mb-2">
                    {machine.name}
                  </h3>
                  <p className="text-neutral-600">{machine.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Section - Reused from Home */}
      <section className="bg-gradient-to-br from-neutral-100 to-neutral-50 py-16">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
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
                    <p className="text-neutral-600 mb-4">
                      {service.description}
                    </p>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 rounded-2xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Need Quality Fabric Manufacturing?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
              Contact us today to discuss your weaving requirements. We deliver
              excellence in every meter of fabric.
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

export default Weaving;
