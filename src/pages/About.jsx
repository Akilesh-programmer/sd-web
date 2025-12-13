const About = () => {
  return (
    <div className="bg-neutral-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About Shri Dhanalakshmi Groups
            </h1>
            <div className="w-24 h-1 bg-secondary-400 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Company Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-12 mb-12">
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
              <strong className="text-primary-700">
                SHRI DHANALAKSHMI GROUPS
              </strong>{" "}
              is having an installed capacity of{" "}
              <strong>33,000 Spindles</strong>,{" "}
              <strong>36 Shuttle Less Looms</strong> and{" "}
              <strong>70 Wind Mills</strong> with the capacity of around{" "}
              <strong>45.00 MW</strong>.
            </p>

            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  33K
                </div>
                <div className="text-sm text-neutral-600">Spindles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2">
                  36
                </div>
                <div className="text-sm text-neutral-600">
                  Shuttle Less Looms
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-2">
                  45 MW
                </div>
                <div className="text-sm text-neutral-600">Wind Power</div>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 p-6 md:p-12">
              {/* Founder Image */}
              <div className="md:col-span-2 flex justify-center items-start">
                <div className="relative">
                  {/* Placeholder for Image */}
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-2xl flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <svg
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto text-neutral-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs sm:text-sm text-neutral-500 mt-2 block">
                        Founder Photo
                      </span>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-16 h-16 md:w-20 md:h-20 bg-primary-100 rounded-full -z-10"></div>
                  <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-20 h-20 md:w-24 md:h-24 bg-secondary-100 rounded-full -z-10"></div>
                </div>
              </div>

              {/* Founder Details */}
              <div className="md:col-span-3 flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full">
                    Chairman & Managing Director
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-4">
                  Mr. C. Natarajan
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  A <strong>dynamic entrepreneur</strong> and seasoned
                  businessman who promoted all the constituents of SDSSM with
                  his vast experience in the textiles field. With{" "}
                  <strong>over 4 decades</strong> of experience in business, his
                  visionary leadership has been instrumental in establishing the
                  group as one of South India's leading textile manufacturers.
                </p>
              </div>
            </div>
          </div>

          {/* Company History */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-800 mb-8 text-center">
              Our Journey
            </h2>

            <div className="space-y-6">
              {/* Formation Story */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-primary-600">
                <h3 className="text-xl font-display font-semibold text-primary-700 mb-4">
                  Company Formation
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  <strong>SHRI DHANALAKSHMI SPINNTEX PRIVATE LIMITED</strong>{" "}
                  was incorporated by converting the erstwhile partnership firm,{" "}
                  <strong>SRI DHANALAKSHMI SPINNING MILL</strong>. Sri
                  Dhanalakshmi Spinning Mills (SDSSM) was the merged entity of
                  the following two business entities:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-primary-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🪡</div>
                    <div className="font-semibold text-primary-800">
                      Sri Dhanalakshmi Textiles
                    </div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">⚙️</div>
                    <div className="font-semibold text-primary-800">
                      Sri Dhanalakshmi Spinning Mills
                    </div>
                  </div>
                </div>
              </div>

              {/* Green Energy Journey */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-accent-600">
                <h3 className="text-xl font-display font-semibold text-accent-700 mb-4 flex items-center">
                  <span className="mr-3 text-2xl">🌱</span>
                  Green Energy Initiative
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  With the manufacturing level reaching substantial heights, the
                  consumption of electricity reached very high levels. As the
                  cost of electricity became substantial, SDSSM installed wind
                  mills for captive consumption.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  With the continuous demand for electricity in Tamil Nadu,
                  SDSSM entered into the power trading business and set up more
                  wind mills in South Tamil Nadu.
                </p>
              </div>

              {/* SDGEIPL Formation */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-secondary-600">
                <h3 className="text-xl font-display font-semibold text-secondary-700 mb-4 flex items-center">
                  <span className="mr-3 text-2xl">⚡</span>
                  Shri Dhanalakshmi Green Energy India Pvt. Ltd.
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  With the experience in Wind Power Generation and trading, a
                  new company was incorporated for wind power business in the
                  name of{" "}
                  <strong>
                    M/S SHRI DHANALAKSHMI GREEN ENERGY INDIA PVT. LTD. (SDGEIPL)
                  </strong>{" "}
                  consisting of the same board of Directors.
                </p>
                <div className="bg-secondary-50 rounded-lg p-4 mt-4">
                  <p className="text-secondary-900 font-semibold">
                    Now this company SDGEIPL is having <strong>11 MW</strong>{" "}
                    capacity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Operations Highlight */}
          <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Powering the Future
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-50">
              Now the group Wind Mills are producing around
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 mb-8">
              <div className="text-5xl md:text-6xl font-bold">90 Million</div>
              <div className="text-xl mt-2">Units Per Annum</div>
            </div>
            <p className="text-lg text-primary-50 max-w-3xl mx-auto">
              By using more than <strong>45 MW wind turbines</strong> to meet
              your requirements with 100% renewable energy
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="bg-gradient-to-br from-neutral-100 to-neutral-50 py-16">
        <div className="section-container">
          <h2 className="text-3xl font-display font-bold text-neutral-800 mb-12 text-center">
            Our Commitment
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-neutral-800 mb-3">
                Quality Excellence
              </h3>
              <p className="text-neutral-600">
                Committed to delivering 100% quality yarn with state-of-the-art
                technology and rigorous quality control
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-neutral-800 mb-3">
                Sustainability
              </h3>
              <p className="text-neutral-600">
                Leading the way in green manufacturing with 100% renewable wind
                energy powering our operations
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-neutral-800 mb-3">
                Customer Focus
              </h3>
              <p className="text-neutral-600">
                Four decades of trust built on understanding and meeting
                customer requirements at every level
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
