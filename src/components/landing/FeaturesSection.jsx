// src/components/landing/FeaturesSection.jsx
import FadeInSection from "./FadeInSection";

const features = [
  "Secure Authentication",
  "Study Group Management",
  "Learning Goal Tracking",
  "Assignment & Submissions",
  "File & Resource Sharing",
  "Progress Monitoring Dashboard",
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Powerful Features
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-gray-800">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;