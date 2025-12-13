import { useState } from "react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All", icon: "🎯" },
    { id: "spinning", name: "Spinning", icon: "🧵" },
    { id: "weaving", name: "Weaving", icon: "🧶" },
    { id: "windmill", name: "Wind Mill", icon: "🌬️" },
  ];

  const galleryImages = [
    // Spinning images
    { id: 1, category: "spinning" },
    { id: 2, category: "spinning" },
    { id: 3, category: "spinning" },
    { id: 4, category: "spinning" },
    { id: 5, category: "spinning" },
    { id: 6, category: "spinning" },
    { id: 7, category: "spinning" },

    // Weaving images
    { id: 8, category: "weaving" },
    { id: 9, category: "weaving" },
    { id: 10, category: "weaving" },
    { id: 11, category: "weaving" },
    { id: 12, category: "weaving" },
    { id: 13, category: "weaving" },

    // Wind Mill images
    { id: 14, category: "windmill" },
    { id: 15, category: "windmill" },
    { id: 16, category: "windmill" },
    { id: 17, category: "windmill" },
    { id: 18, category: "windmill" },
    { id: 19, category: "windmill" },
    { id: 20, category: "windmill" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const getCategoryColor = (category) => {
    const colors = {
      spinning: "from-secondary-500 to-secondary-600",
      weaving: "from-accent-500 to-accent-600",
      windmill: "from-primary-500 to-primary-600",
    };
    return colors[category] || "from-neutral-500 to-neutral-600";
  };

  const getCategoryIcon = (category) => {
    const icons = {
      spinning: "🧵",
      weaving: "🧶",
      windmill: "🌬️",
    };
    return icons[category] || "📷";
  };

  return (
    <div className="bg-neutral-50 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-primary-700 via-accent-600 to-secondary-600 overflow-hidden">
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
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Explore Our State-of-the-Art Facilities
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-container">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-8 md:mb-12 md:sticky md:top-4 z-10">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`
                    px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105
                    flex items-center gap-2 text-sm md:text-base
                    ${
                      activeFilter === filter.id
                        ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }
                  `}
                >
                  <span className="text-xl">{filter.icon}</span>
                  <span>{filter.name}</span>
                  {activeFilter === filter.id && (
                    <span className="ml-1 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {filter.id === "all"
                        ? galleryImages.length
                        : galleryImages.filter(
                            (img) => img.category === filter.id
                          ).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-800">
                {activeFilter === "all"
                  ? "All Images"
                  : filters.find((f) => f.id === activeFilter)?.name}
              </h2>
              <span className="text-neutral-600 bg-neutral-100 px-4 py-2 rounded-lg font-medium">
                {filteredImages.length}{" "}
                {filteredImages.length === 1 ? "Image" : "Images"}
              </span>
            </div>

            {/* Image Grid with Animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                  }}
                >
                  {/* Image Placeholder */}
                  <div
                    className={`relative h-80 bg-gradient-to-br ${getCategoryColor(
                      image.category
                    )} overflow-hidden`}
                  >
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.2) 10px, rgba(255,255,255,.2) 20px)`,
                        }}
                      ></div>
                    </div>

                    {/* Image Placeholder Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <svg
                          className="w-20 h-20 mx-auto mb-4 opacity-70"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          Image Placeholder
                        </span>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-neutral-800 px-6 py-2 rounded-lg font-semibold transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        View Full Size
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="p-4 text-center">
                    <span className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-800 text-sm font-semibold px-4 py-2 rounded-full capitalize">
                      <span className="text-lg">
                        {getCategoryIcon(image.category)}
                      </span>
                      {image.category === "windmill"
                        ? "Wind Mill"
                        : image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📷</div>
                <h3 className="text-2xl font-semibold text-neutral-800 mb-2">
                  No Images Found
                </h3>
                <p className="text-neutral-600">
                  Try selecting a different category
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary-700 via-secondary-600 to-accent-600 rounded-2xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Want to Visit Our Facilities?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Schedule a tour to see our state-of-the-art manufacturing
              facilities in person.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-700 hover:bg-neutral-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Add fadeInUp animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
