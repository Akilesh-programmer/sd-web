import { Link } from "react-router-dom";

const Solar = () => {
  const solarAdvantages = [
    {
      icon: "🌞",
      title: "Clean & Renewable",
      description:
        "Harness infinite solar energy without depleting natural resources or producing harmful emissions",
    },
    {
      icon: "💰",
      title: "Cost Efficient",
      description:
        "Dramatically reduce energy bills with solar power that pays for itself over time",
    },
    {
      icon: "🌱",
      title: "Environmental Impact",
      description:
        "Reduce carbon footprint and contribute to a sustainable future for generations",
    },
    {
      icon: "⚡",
      title: "Energy Independence",
      description:
        "Generate your own electricity and reduce dependency on traditional power grids",
    },
    {
      icon: "🔧",
      title: "Low Maintenance",
      description:
        "Solar panels require minimal maintenance with long-lasting performance guarantees",
    },
    {
      icon: "📈",
      title: "Scalable Solutions",
      description:
        "Flexible systems that grow with your needs from residential to industrial scale",
    },
  ];

  const solarStats = [
    { value: "25+ MW", label: "Solar Capacity" },
    { value: "99.9%", label: "System Uptime" },
    { value: "35K+ MWh", label: "Annual Generation" },
    { value: "20K+ Tons", label: "CO₂ Reduced Yearly" },
  ];

  const solarProducts = [
    {
      title: "Rooftop Solar Systems",
      description:
        "Commercial and industrial rooftop installations with maximum space utilization",
      image: "solar-rooftop-placeholder.jpg",
    },
    {
      title: "Ground-Mounted Arrays",
      description:
        "Large-scale solar farms with optimized panel positioning for maximum efficiency",
      image: "solar-ground-placeholder.jpg",
    },
    {
      title: "Solar Tracking Systems",
      description:
        "Advanced dual-axis tracking technology for 30% increased energy capture",
      image: "solar-tracking-placeholder.jpg",
    },
    {
      title: "Hybrid Energy Solutions",
      description:
        "Integrated solar-wind hybrid systems for consistent renewable power generation",
      image: "solar-hybrid-placeholder.jpg",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            Power Your Life With Sunshine
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8">
            Leading the renewable energy revolution with cutting-edge solar
            photovoltaic technology
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-base sm:text-lg"
          >
            Get Solar Quote
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Sustainable Solar Energy Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Shri Dhanalakshmi Groups, we are committed to harnessing the
              power of the sun to create a sustainable future. Our
              state-of-the-art solar energy installations deliver clean,
              renewable power while significantly reducing carbon emissions and
              energy costs.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            {solarStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 sm:p-6 md:p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Advantages */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose Solar Energy?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive benefits of switching to solar power
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {solarAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl sm:text-5xl mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Advanced Solar Technology
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We utilize the latest photovoltaic innovations to maximize energy
              efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-64 sm:h-80 md:h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl mb-4">☀️</div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Solar Technology Image
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">🔆</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    High-Efficiency Panels
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Monocrystalline and polycrystalline panels with conversion
                    efficiency up to 22%, ensuring maximum power generation from
                    every ray of sunlight.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">🌐</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Smart Grid Integration
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Seamless integration with existing power infrastructure,
                    featuring advanced inverters and real-time monitoring
                    systems for optimal performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">♻️</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Sustainable Manufacturing
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    All our solar installations use eco-friendly materials and
                    follow strict environmental compliance standards throughout
                    the lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Environmental Commitment
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Every kilowatt-hour of solar energy we generate represents a step
              towards a cleaner planet. Our solar installations have prevented
              thousands of tons of CO₂ emissions, equivalent to planting
              millions of trees and taking thousands of cars off the road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl sm:text-5xl mb-4">🌲</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">
                1M+
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Trees Worth of CO₂ Offset
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl sm:text-5xl mb-4">🚗</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">
                4,500+
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Cars Off the Road Equivalent
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl sm:text-5xl mb-4">💧</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">
                50M+ Liters
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Water Saved Annually
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solar Products */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Solar Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solar energy systems tailored to your specific
              requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {solarProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-48 sm:h-56 md:h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl mb-2">☀️</div>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {product.image}
                    </p>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8">
            Join the renewable energy revolution and start saving on energy
            costs today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-base sm:text-lg"
            >
              Get Started
            </Link>
            <Link
              to="/gallery"
              className="inline-block bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 text-base sm:text-lg"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solar;
