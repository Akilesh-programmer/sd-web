import { COMPANY_INFO, SERVICES } from "../constants";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white">
        <div className="section-container py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Welcome to {COMPANY_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-lg mb-8 text-primary-100">
              Leading the textile industry with excellence in spinning, weaving,
              and sustainable energy solutions since {COMPANY_INFO.established}.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-primary-700 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Explore Our Services
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-medium py-3 px-8 rounded-lg transition-all duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-neutral-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We provide comprehensive textile manufacturing solutions with
            state-of-the-art technology and sustainable practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="card group cursor-pointer">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-display font-semibold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                {service.name}
              </h3>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-100 py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-neutral-800 mb-2">
                Quality Assured
              </h3>
              <p className="text-neutral-600">
                ISO certified processes ensuring the highest quality standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-neutral-800 mb-2">
                Advanced Technology
              </h3>
              <p className="text-neutral-600">
                State-of-the-art machinery and modern manufacturing processes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🌱</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-neutral-800 mb-2">
                Sustainable
              </h3>
              <p className="text-neutral-600">
                Eco-friendly practices with renewable energy from our windmill
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg mb-8 text-primary-50">
            Contact us today to discuss your textile manufacturing needs
          </p>
          <button className="bg-white text-primary-700 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
