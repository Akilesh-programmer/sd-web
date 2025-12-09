import { Link } from "react-router-dom";
import { SERVICES } from "../constants";

const WindMill = () => {
  const machines = [
    { id: 1, name: "Wind Turbine Model 1", category: "Wind Energy Generator" },
    { id: 2, name: "Wind Turbine Model 2", category: "Wind Energy Generator" },
    { id: 3, name: "Wind Turbine Model 3", category: "Wind Energy Generator" },
    { id: 4, name: "Wind Turbine Model 4", category: "Wind Energy Generator" },
    { id: 5, name: "Wind Turbine Model 5", category: "Wind Energy Generator" },
    { id: 6, name: "Wind Turbine Model 6", category: "Wind Energy Generator" },
  ];

  return (
    <div className="bg-neutral-50 overflow-x-hidden">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-accent-700 to-accent-900 overflow-hidden">
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
              Wind Mill Division
            </h1>
            <p className="text-xl md:text-2xl text-accent-100">
              Sustainable Green Energy Solutions
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
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🌍 Renewable Energy Initiative
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-neutral-800 leading-relaxed mb-6">
                Growing concern for the{" "}
                <strong className="text-accent-700">global warming</strong> led
                to the world's interest in{" "}
                <strong className="text-accent-700">
                  renewable energy resources
                </strong>
                . Windmill is considered to be the most{" "}
                <strong className="text-accent-700">
                  eco friendly and growing energy resources
                </strong>
                .
              </p>
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                Realising that the long term solutions to meet growing power
                needs, <strong className="text-primary-700">SDS</strong> has
                taken significant steps in green energy.
              </p>
            </div>
          </div>

          {/* Key Statistics Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Wind Turbines */}
            <div className="bg-gradient-to-br from-accent-600 to-accent-700 rounded-xl p-8 text-white shadow-lg text-center">
              <div className="text-5xl mb-4">🌬️</div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">70</h3>
              <p className="text-lg text-accent-100">Wind Turbines</p>
              <p className="text-sm text-accent-200 mt-2">
                Across Tamil Nadu, India
              </p>
            </div>

            {/* Generation Capacity */}
            <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-xl p-8 text-white shadow-lg text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">45 MW</h3>
              <p className="text-lg text-secondary-100">Generation Capacity</p>
              <p className="text-sm text-secondary-200 mt-2">
                Clean Energy Power
              </p>
            </div>

            {/* Annual Production */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white shadow-lg text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">90M</h3>
              <p className="text-lg text-primary-100">Wind Units Per Annum</p>
              <p className="text-sm text-primary-200 mt-2">
                Million Units Generated
              </p>
            </div>
          </div>

          {/* Commissioned Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-800 mb-8 text-center">
              Our Wind Energy Infrastructure
            </h2>

            <div className="space-y-6">
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
                    <strong className="text-accent-700">
                      SDS has Commissioned 70 Wind Turbines
                    </strong>{" "}
                    across Tamil Nadu, India
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
                    Total generation capacity of{" "}
                    <strong className="text-secondary-700">45 MW</strong>
                  </p>
                </div>
              </div>

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
                    Producing{" "}
                    <strong className="text-primary-700">
                      90 Million wind units per annum
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
                    <strong className="text-accent-700">
                      Surplus power trading across Tamil Nadu
                    </strong>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-6 mt-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">🌱</div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                      Environmental Impact
                    </h4>
                    <p className="text-neutral-700">
                      Our wind energy initiatives contribute to{" "}
                      <strong className="text-accent-700">
                        reducing carbon footprint
                      </strong>{" "}
                      and{" "}
                      <strong className="text-accent-700">
                        promoting sustainable development
                      </strong>{" "}
                      for future generations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wind Turbines Section */}
      <section className="bg-gradient-to-br from-neutral-100 to-neutral-50 py-16">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-neutral-800 mb-4 text-center">
              Our Wind Turbines
            </h2>
            <p className="text-center text-neutral-600 mb-12">
              Advanced wind energy generation systems
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {machines.map((machine) => (
                <div
                  key={machine.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center"
                >
                  {/* Placeholder for Turbine Image */}
                  <div className="w-full aspect-square bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center p-2">
                      <svg
                        className="w-16 h-16 mx-auto text-accent-600 mb-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs text-accent-700 font-medium">
                        Turbine Image
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-neutral-800 text-center mb-1">
                    {machine.name}
                  </h3>
                  <p className="text-xs text-neutral-500 text-center">
                    {machine.category}
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
          <div className="bg-gradient-to-r from-accent-700 via-accent-600 to-primary-600 rounded-2xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Interested in Green Energy Solutions?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-accent-50 max-w-2xl mx-auto">
              Learn more about our wind energy initiatives and how we contribute
              to a sustainable future.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-accent-700 hover:bg-accent-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindMill;
